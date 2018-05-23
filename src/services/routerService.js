export const getUrlParams = (url) => {

    let result = {}
    const query = url.split('?')[1]
    
    if (query) {
        const params = query.split('&');
        for(const param of params) {
            const [k, v] = param.split('=');
            result[k] = v;
        }
    }
    
    return result
}