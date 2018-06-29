import config from './config';

const constrcutUrl = (path) => `${config.apiBase}${path}`;

export const whoami = constrcutUrl('sys/whoami');
export const login = constrcutUrl('sys/login');
export const logout = constrcutUrl('sys/logout');
export const signup = constrcutUrl('sys/signup');
export const user = constrcutUrl('api/1.0/users/{userId}');