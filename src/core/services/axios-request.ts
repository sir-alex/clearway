import axios from 'axios';
import { responseInterceptorError, responseInterceptorSuccess } from '@core/services/response-interceptor';

import { CONFIG } from '@root/config';

export const axiosRequest = axios.create({
    baseURL: `${CONFIG.API.HOST}/${CONFIG.API.API_PREFIX}`
});

axiosRequest.interceptors.response.use(
    responseInterceptorSuccess,
    responseInterceptorError
);
