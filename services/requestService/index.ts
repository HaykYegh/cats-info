import axios, { type AxiosPromise } from 'axios';

import type { IRequestUrl } from './requestServiceTypes';
import {apiKey, ContentTypes} from "@/configs";

export function request({ method, url, data, params, contentType }: IRequestUrl, formData?: FormData): AxiosPromise {
  if (formData) {
    return axios.post(url as string, formData, {
      headers: {
        'Content-Type': contentType,
        'x-api-key': apiKey,
      },
    });
  }
  return axios({
    method,
    url,
    headers: {
      'Content-Type': contentType ?? ContentTypes.APPLICATION_JSON,
      'x-api-key': apiKey,
    },
    data: contentType ?? ContentTypes.MULTIPART_FORM_DATA ? formData : data,
    params
  });
}
