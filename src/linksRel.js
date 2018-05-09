import config from './config';

const constrcutUrl = (path) => `${config.apiBase}${path}`;

export const getUser = constrcutUrl('sys/whoami');
export const signin = constrcutUrl('sys/login');