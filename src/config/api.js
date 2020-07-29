import { create } from 'apisauce';

const api = create({
  baseURL: process.env.REACT_APP_MOVIES_API_BASE_URL
});

api.addRequestTransform(request => {
  request.params = {
    ...request.params,
    api_key: process.env.REACT_APP_MOVIES_API_KEY,
    include_adult: false,
    include_video: false
  };
});

export default api;
