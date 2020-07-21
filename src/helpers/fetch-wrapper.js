export {
    get,
    post,
    _delete
};

const get = (url) => {
    const arrOptions = {
        method='GET',
        headers: authHeader(url)
    };

    return fetch(url, arrOptions).then(handleResponse)
}

const post = () => { }

const _delete = () => { }

const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            if ([401, 403].includes(response.status) && accountService.userValue) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                authService.logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}