import { AxiosRequestConfig } from 'axios';
import { axiosRequest } from '@core/services/axios-request';
import { CONFIG } from '@root/config';

export class RequestService {

    public get<T extends unknown>(
        to: string,
        query?: object,
    ): Promise<T> {
        const path = this.buildApiPath(to);
        const axiosOptions: AxiosRequestConfig = {};
        if (query) {
            axiosOptions.params = query;
        }
        return axiosRequest.get(path, axiosOptions);
    }

    private buildApiPath(to: string) : string {
        return `/${CONFIG.API.VERSION}/${to}`;
    }

}
