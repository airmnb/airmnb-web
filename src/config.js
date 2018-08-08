
const basic = {
    'apiBase': 'http://localhost:5000/',
    'publicUrls': ['', '/', '/login', '/signup']
}

// For production environment
const prod = {
    'apiBase': '/',
}

// For development environment (usually localhost)
const dev = {};

let envConfig;
switch(process.env.REACT_APP_RUNTIME_ENVIRONMENT) {
    case 'development':
        envConfig = dev;
        break;
    case 'production':
    default:
        envConfig = prod;
}

const config = Object.assign(basic, envConfig);
export default config;
