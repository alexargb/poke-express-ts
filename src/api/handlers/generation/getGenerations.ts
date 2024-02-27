import type { Middleware } from "~/types/express";
import type { Page } from "~/types/poketypes/shared";

const CACHE_KEY = 'GEN';

export const getGenerationsHandler: Middleware = async (req, res, next) => {
  const { restClient } = req;
  try {
    const response: Page = await restClient.get('/generation', { cacheKey: CACHE_KEY });
    // TODO: decorate generations
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};
