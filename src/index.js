import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import db from './db';
import middleware from './middleware';
import api from './routes';
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
// console.log(db);
app.use(api({ config, db }));
// console.log()
app.server.listen(process.env.PORT || config.port);

console.log(`Started on port ${app.server.address().port}`);
// connect to db
// initializeDb(db => {

//     // internal middleware
//     app.use(middleware({ config, db }));

//     // api router
//     app.use('/api', api({ config, db }));

//     app.server.listen(process.env.PORT || config.port);

//     console.log(`Started on port ${app.server.address().port}`);
// });
// app.get('/sync', function(req, res) {
//     sequelize.sync({ force: true }).success(function() {
//         console.log('sync done');
//         res.send(200, 'sync done');
//     }).error(function(error) {
//         console.log('there was a problem');
//         res.send(200, 'there was a problem');
//     });
// });
export default app;
