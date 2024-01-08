import type { Middleware } from "~/types/express";
import type { IRestClient } from "~/types/axios";
import { RestClient } from "~/utils/restclient";

const BASE_URL = '';
let restClient: IRestClient = null;

export const restclientMiddleware: Middleware = (req, res, next) => {
  if (!restClient) restClient = new RestClient(BASE_URL);
  req.restClient = restClient;
  next();
};
