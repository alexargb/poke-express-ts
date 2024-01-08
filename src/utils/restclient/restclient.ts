import axios from 'axios';
import type {
  IRestClient,
  RequestOptions,
  BodyRequest,
  NoBodyRequest,
} from '~/types/axios';

export class RestClient implements IRestClient {
  constructor(baseUrl?: string) {
    if (baseUrl)
      this.baseUrl = baseUrl;
  }
  private baseUrl: string = ''

  // private methods
  private getUrl(url: string) {
    return this.baseUrl + url;
  }

  private async executeEmptyRequest(method: NoBodyRequest, url: string, options: RequestOptions) {
    const requestUrl = this.getUrl(url);
    const response = await method(requestUrl, options);
    return response.data;
  }

  private async executeBodyRequest(method: BodyRequest, url: string, options: RequestOptions) {
    const data = options.body;
    delete options.body;
    const requestUrl = this.getUrl(url);
    const response = await method(requestUrl, data, options);
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
