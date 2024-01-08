import type { Middleware } from "~/types/express";

export const getBadExampleHandler: Middleware = async (req, res, next) => {
  const { restClient } = req;
  try {
    const fact: { data: unknown } = await restClient.get('https://random-url-that-does-not-exist/random-path');
    res.status(200).send(fact.data);
  } catch (error) {
    next(error);
  }
};
