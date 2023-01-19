const REST_API = process.env.NEXT_PUBLIC_REST_API;

const headers = {
    'Content-Type': 'application/json'
}

async function get(route: string): Promise<Response> {
    return await fetch(REST_API + route, {
        method: 'GET',
        headers,
    });
}

async function patch(route: string, body: any): Promise<Response> {
    return await fetch(REST_API + route, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(body),
    });
}

async function post(route: string, body: any): Promise<Response> {
    return await fetch(REST_API + route, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    });
}

async function _delete(route: string): Promise<Response> {
    return await fetch(REST_API + route, {
        method: 'DELETE',
        headers,
    });
}

export default {
    get,
    patch,
    post,
    delete: _delete,
}