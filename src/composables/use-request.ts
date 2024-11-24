import request from '@/utils/request';
import { createFetch } from '@vueuse/core';

const useRequest = createFetch({
  baseUrl: import.meta.env.APP_API_BASE_URL,
  options: {
    fetch: request,
  },
});

export default useRequest;
