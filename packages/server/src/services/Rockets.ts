import axios from 'axios';
import logger from '../utils/logger';
import { API } from '../constants/api';

export const RocketService = {
	GET_ROCKETS
};

async function GET_ROCKETS() {
	try {
		const response = await axios.get(`${API.baseUrl}/launches`);
		logger.info('sending data');
		return {
			response: response.data
		};
	} catch (error) {
		logger.error('Eror: getRockets ->', error.message);
		return {
			error: true,
			msg: error.message
		};
	}
}
