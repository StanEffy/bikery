declare module "axios" {
	export interface AxiosRequestConfig {
		"Access-Control-Allow-Credentials"?: boolean
		withCredentials?: boolean
	}
}
export {}
