// import request from 'request-promise';
import axios from 'axios';

import logger from '../utils/logger';

const getRockets = async (req: any, res: any) => {
	try {
		logger.info(`Invoked ${getRockets.name.toUpperCase()}().`);
		const response = await axios.get('https://api.spacexdata.com/v3/launches');
		console.log('LOG: getRockets -> response', response.data);
		return response.data;
	} catch (err) {
		return res.json({ error: err.message });
	}
};

export default getRockets;
