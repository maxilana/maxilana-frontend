import 'axios';

declare module 'axios' {
  export interface AxiosResponse<T> extends Promise<T> {}
}
