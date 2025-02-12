export class HttpClient {
  constructor(endpoint) {
    this._endpoint = endpoint;
    // Läst bas url någonstans ifrån...
  }

  async get() {
    try {
      const response = await fetch(this._endpoint);
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(
          `GET misslyckades ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async post(body) {
    try {
      const response = await fetch(this._endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        return true;
      } else {
        throw new Error(
          `POST misslyckade ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
