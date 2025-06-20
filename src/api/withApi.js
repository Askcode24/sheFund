import { toast } from 'react-toastify';

export const withApi =
  (apiFunc) =>
  async (...args) => {
    try {
      const response = await apiFunc(...args);
      if (response?.data?.status === 'success' && response?.data?.message) {
        toast.success(response.data.message);
      }
      return [response.data, null];
    } catch (error) {
      const apiError = error.response?.data || error.message || error;
      let message = apiError?.message || apiError;
      if (apiError?.data && typeof apiError.data === 'object') {
        const allMessages = [];
        Object.keys(apiError.data).forEach((key) => {
          const val = apiError.data[key];
          if (Array.isArray(val)) {
            val.forEach((msg) => allMessages.push(msg));
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
