const headers = {
    'Content-Type': 'application/json'
}

interface HttpClientProps {
    api: string;
    get(route: string): Promise<Response>;
    patch(route: string, body: any): Promise<Response>;
    post(route: string, boyd: any): Promise<Response>;
    delete(route: string): Promise<Response>;
}

class HttpClient implements HttpClientProps {

    api: string;

    constructor(api: string) {
        this.api = api;
    }

    async get(route: string): Promise<Response> {
        return await fetch(this.api + route, {
            method: 'GET',
            headers,
        });
    }

    async patch(route: string, body: any): Promise<Response> {
        return await fetch(this.api + route, {
            method: 'PATCH',
            headers,
            body: JSON.stringify(body),
        });
    }

    async post(route: string, body: any): Promise<Response> {
        return await fetch(this.api + route, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        });
    }

    async delete(route: string): Promise<Response> {
        return await fetch(this.api + route, {
            method: 'DELETE',
            headers,
        });
    }
}

export default HttpClient;