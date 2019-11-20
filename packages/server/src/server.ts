import 'dotenv/config';
import express, { Express, Request, Response } from 'express';
import logger from './utils/logger';
import routes from './routes';

const server: Express = express();
const router = express.Router();
const PORT = process.env.PORT || 4000;

server
	.use(express.json())
	.use((_req: Request, res: Response, next) => {
		res.append('Access-Control-Allow-Methods', 'OPTIONS');
		res.append('Cache-Control', 'no-store');
		next();
	})
	.use(router)
	.use('/api', routes)
	.use((_req: Request, res, next) => {
		res.locals.startTime = Date.now();
		res.locals.errors = [];
		next();
	})
	.listen(PORT, () => logger.info(`Server running on PORT ${PORT}`));
