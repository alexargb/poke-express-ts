import type { Req, Res } from '~/types/express';
import type { AxiosError } from 'axios';

// error message validation
const MESSAGE_PROPS = ['message', 'messages'];

const validateMessageProp = (data: unknown) => (name: string) => {
  const messageProp: string | string[] = data[name];
  if (!messageProp) return '';

  if (Array.isArray(messageProp))
    return `- ${messageProp.join(' - ')}`;

  if (typeof messageProp === 'string')
    return `- ${messageProp}`;
};

const validateMessageProps = (data: unknown) =>
  MESSAGE_PROPS.map(validateMessageProp(data)).filter((i) => !!i).join(' - ');

// code validation
const validateRequestErrorCode = (error: { code?: string }): number => {
  if (error.code === 'ENOTFOUND')
    return 404;
  return 400;
};

// request handler
export const handleRequestError = (req: Req, res: Res, error: AxiosError) => {
  const { logger } = req;

  const status = validateRequestErrorCode(error);
  let errorMessage = `[REQUEST ERROR][${status}]: ${error.message}`;

  const requestMessage = validateMessageProps(error.request);
  if (requestMessage)
    errorMessage += ' - ' + requestMessage;

  logger.error(errorMessage);
  res.status(status).send(errorMessage);
};

// response handler
export const handleResponseError = (req: Req, res: Res, error: AxiosError) => {
  const { logger } = req;

  const responseMessage = validateMessageProps(error.response.data);
  const errorMessage = `[RESPONSE ERROR][${error.status}]: ${error.message}` + responseMessage;

  logger.error(errorMessage);
  res.status(error.status).send(errorMessage);
};
