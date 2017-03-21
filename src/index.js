import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import glob from 'glob';
import chalk from 'chalk';
import initializeDb from './db';
import middleware from './middleware';
import route from './routes';
import config from './config.json';
let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
    exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
    limit: config.bodyLimit
}));

const initRoutes = (app) => {
    // including all routes
    glob('./routes/*.js', { cwd: path.resolve('./src') }, (err, routes) => {
        if (err) {
            console.log(chalk.red('Error occured including routes'));
            return;
        }
        routes.forEach((routePath) => {
            require(routePath).default(app); // eslint-disable-line
        });
        console.log(chalk.green(`included ${routes.length} route files`));
    });
}
;

const initMiddlewares = (app) => {
    // 3rd party middleware
    app.use(cors({
        exposedHeaders: ['Link']
    }));
    app.use(bodyParser.json({
        limit: '100kb'
    }));
};
initRoutes(app);
initMiddlewares(app);
// api router
// app.use(route())


app.server.listen(process.env.PORT || config.port);
console.log(`Started on port ${app.server.address().port}`);

export default app;
