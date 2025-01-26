export class HttpClient {
  constructor(private _url: string) {}
  async Get() {
    try {
      const response = await fetch(this._url);

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(
          `GET misslyckades ${response.status} - ${response.statusText}`
        );
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
