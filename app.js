require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/limiter');
const { port, baseHost } = require('./utils/config');
const routes = require('./routes');
const errorHandler = require('./middlewares/errors/errorHandler');
const cors = require('./middlewares/cors');

const { PORT, BASE_HOST, NODE_ENV } = process.env;

mongoose.connect(NODE_ENV === 'production' ? BASE_HOST : baseHost);

const app = express();

app.use(express.json());
app.use(cors);
app.use(cookieParser());
app.use(helmet());
app.use(limiter);
app.use(requestLogger);
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(NODE_ENV === 'production' ? PORT : port);
