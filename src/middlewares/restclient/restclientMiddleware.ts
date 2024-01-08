import type { Middleware } from "~/types/express";
import type { IRestClient } from "~/types/axios";
import { RestClient } from "~/utils/restclient";

let restClient: IRestClient = null;

export const restclientMiddleware: Middleware = (req, res, next) => {
  if (!restClient) restClient = new RestClient();
  req.restClient = restClient;
  next();
};
