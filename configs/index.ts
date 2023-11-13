export const baseUrl = process.env.NEXT_PUBLIC_CAT_API_BASE_URL;
export const apiKey = process.env.NEXT_PUBLIC_CAT_API_KEY;

export enum RequestMethods {
  GET = 'GET',
  POST = 'POST',
}

export enum ContentTypes {
  APPLICATION_JSON = 'application/json',
  MULTIPART_FORM_DATA = 'multipart/form-data',
}
