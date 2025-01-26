export class HttpClient {
    constructor(_url) {
        this._url = _url;
    }
    async Get() {
        try {
            const response = await fetch(this._url);
            if (response.ok) {
                return await response.json();
            }
            else {
                throw new Error(`GET misslyckades ${response.status} - ${response.statusText}`);
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
