import type { Middleware } from "~/types/express";

export const getExampleHandler: Middleware = async (req, res, next) => {
  const { restClient } = req;
  try {
    const fact: { data: string[] } = await restClient.get('https://meowfacts.herokuapp.com/');
    res.status(200).send(fact.data);
  } catch (error) {
    next(error);
  }
};
