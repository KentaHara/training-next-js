import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface APIDto {}

export abstract class APIBase {
  private client: AxiosInstance

  constructor(config?: AxiosRequestConfig) {
    this.client = axios.create(config)
  }

  protected get<T extends APIDto>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.client.get(url, config).then((v) => v.data as T)
  }

  protected post<T extends APIDto>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.client.post(url, config).then((v) => v.data as T)
  }
}
