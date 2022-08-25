import axios from "axios"

export interface HTTPAdapter {
  get<T>(url: string): Promise<T>
}

export class PokeApiFetchAdapter implements HTTPAdapter {
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url)
    const data = resp.json()
    return data
  }
}

export class PokeApiAdapter implements HTTPAdapter {
  private readonly axios = axios

  async get<T>(url: string) {
    const { data } = await this.axios.get<T>(url)
    return data
  }

  async post(url: string, data: any) {}
  async patch(url: string, data: any) {}
  async delete(url: string, data: any) {}
}
