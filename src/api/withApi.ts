import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';

export interface ApiResponse {
  status?: string;
  message?: string;
  [key: string]: any;
}

type ApiFunc<T = ApiResponse> = (...args: any[]) => Promise<AxiosResponse<T>>;

export const withApi =
  <T extends ApiResponse = ApiResponse>(apiFunc: ApiFunc<T>) =>
  async (...args: any[]): Promise<[T | null, any]> => {
    try {
      const response = await apiFunc(...args);
      if (response?.data?.status === 'success' && response?.data?.message) {
        toast.success(response.data.message);
      }
      return [response.data, null];
    } catch (error: any) {
      const apiError = error.response?.data || error.message || error;
      let message = apiError?.message || apiError;
      if (apiError?.data && typeof apiError.data === 'object') {
        const allMessages: string[] = [];
        Object.keys(apiError.data).forEach((key) => {
          const val = apiError.data[key];
          if (Array.isArray(val)) {
            val.forEach((msg: string) => allMessages.push(msg));
          }
        });
        if (allMessages.length > 0) {
          message = allMessages.join(' ');
        } else {
          const key = Object.keys(apiError.data).find(
            (k) =>
              Array.isArray(apiError.data[k]) && apiError.data[k].length > 0
          );
          if (key) {
            message = apiError.data[key][0];
          }
        }
      }

      if (message) toast.error(message);

      return [null, apiError];
    }
  };
