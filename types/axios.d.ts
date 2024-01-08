import { AxiosInstance } from 'axios';

export type NoBodyRequest = AxiosInstance['get'] | AxiosInstance['delete'];
export type BodyRequest = AxiosInstance['post'] | AxiosInstance['put'];

type Param = string | number | boolean;
type RequestParams = Record<string, Param>;

type RequestHeaders = Record<string, string[]>;

type RequestBody = Record<string, Param | null>;

export type RequestOptions = {
  params?: RequestParams,
  headers?: RequestHeaders,
  body?: RequestBody,
};

export interface IRestClient {
  get<T>(url: string, options?: RequestOptions): Promise<T>,
  post<T>(url: string, options?: RequestOptions): Promise<T>,
  put<T>(url: string, options?: RequestOptions): Promise<T>,
  delete<T>(url: string, options?: RequestOptions): Promise<T>,
}
