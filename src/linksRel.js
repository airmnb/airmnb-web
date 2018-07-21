import config from './config';

const constrcutUrl = (path) => `${config.apiBase}${path}`;

export const whoami = constrcutUrl('sys/whoami');
export const login = constrcutUrl('sys/login');
export const logout = constrcutUrl('sys/logout');
export const signup = constrcutUrl('sys/signup');
export const user = constrcutUrl('api/1.0/users/{userId}');
export const recommended = constrcutUrl('activities/recommended');
export const babies = constrcutUrl('api/1.0/babies');
export const images = constrcutUrl('api/1.0/images_base64');