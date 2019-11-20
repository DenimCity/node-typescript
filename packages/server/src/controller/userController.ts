import { RocketService } from '../services/Rockets';

const getRockets = async (_req: any, res: any) => {
	const { response, error, msg } = await RocketService.GET_ROCKETS();
	if (response) {
		return res.send(response);
	}
	return res.json({ error, msg });
};

export default getRockets;
