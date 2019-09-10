import request from 'request-promise'

import logger from '../utils/logger';

 const getRockets = (req: any, res: any) => {
  try {
      logger.info(`Invoked ${getRockets.name.toUpperCase()}().`);
      request({
          uri: 'https://api.spacexdata.com/v3/launches',
          json: true
      }, (error, response, body) => {
          if (!error) {
              logger.debug('Data return from End Point')
              return res.json({ body });
          }
         logger.error(error.message)
      })
  } catch (err) {
      return res.json({ error: err.message });
  }
}

export default getRockets