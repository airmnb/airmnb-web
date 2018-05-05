import config from './config';

const constrcutHref = (path) => `${config.apiBase}${path}`;

export const getUser = constrcutHref('sys/whoami');