import config from './config';

const constrcutUrl = (path) => `${config.apiBase}${path}`;

export const getUser = constrcutUrl('sys/whoami');
export const saveUser = constrcutUrl('sys/whoami');
export const login = constrcutUrl('sys/login');
export const signup = constrcutUrl('sys/signup');