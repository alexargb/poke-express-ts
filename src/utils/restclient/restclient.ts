import axios, { AxiosResponse } from 'axios';
import type {
  IRestClient,
  RequestOptions,
  BodyRequest,
  NoBodyRequest,
} from '~/types/axios';
import NodeCache from 'node-cache';

const TTL = 60 * 120; // 120 minutes (2 hours)

export class RestClient implements IRestClient {
  constructor(baseUrl?: string) {
    this.cache = new NodeCache({ stdTTL: TTL });
    if (baseUrl)
      this.baseUrl = baseUrl;
  }
  private baseUrl: string = '';
  private cache: NodeCache;

  // private methods
  private getUrl(url: string) {
    return this.baseUrl + url;
  }

  private getCache(options?: RequestOptions): AxiosResponse | null {
    const key = options?.cacheKey;
    if (!key) return null;

    return this.cache.get(key) || null;
  }

  private setCache(options?: RequestOptions, value?: AxiosResponse) {
    const key = options?.cacheKey;
    if (!key) return;

    this.cache.set(key, value.data);
  }

  private async executeEmptyRequest(method: NoBodyRequest, url: string, options: RequestOptions) {
    const cacheValue = this.getCache(options);
    if (cacheValue) return cacheValue;

    const requestUrl = this.getUrl(url);
    const response = await method(requestUrl, options);

    this.setCache(options, response);
    return response.data;
  }

  private async executeBodyRequest(method: BodyRequest, url: string, options: RequestOptions) {
    const cacheValue = this.getCache(options);
    if (cacheValue) return cacheValue;

    const data = options.body;
    delete options.body;
    const requestUrl = this.getUrl(url);
    const response = await method(requestUrl, data, options);

    this.setCache(options, response);
    return response.data;
  }

  // public methods
  public get(url: string, options: RequestOptions) {
    return this.executeEmptyRequest(axios.get, url, options);
  }

  public post(url: string, options: RequestOptions) {
    return this.executeBodyRequest(axios.post, url, options);
  }

  public put(url: string, options: RequestOptions) {
    return this.executeBodyRequest(axios.put, url, options);
  }

  public delete(url: string, options: RequestOptions) {
    return this.executeEmptyRequest(axios.delete, url, options);
  }
}
