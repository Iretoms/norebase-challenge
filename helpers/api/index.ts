export class Api {
  static async get<T extends Record<string, any> | string>(endpoint: string) {
    let response = await fetch(endpoint, {
      method: "GET",
    });

    return (await response.json()) as unknown as T;
  }
}
