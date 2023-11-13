import type { AxiosResponse } from 'axios';
import { request } from '../requestService';
import {baseUrl, RequestMethods} from "@/configs";
import {GetCatsPayload} from "@/modules/Cats/store/cats/types";

export const getCatData = ({id}: {id: string}): Promise<AxiosResponse> =>
  request({
    method: RequestMethods.GET,
    url: `${baseUrl}/${id}`,
  });

export const getCatsData = (params: GetCatsPayload): Promise<AxiosResponse> =>
  request({
    method: RequestMethods.GET,
    url: `${baseUrl}/search`,
    params,
  });

export const uploadCatImage = (formData: FormData): Promise<AxiosResponse> =>
  request({
    method: RequestMethods.POST,
    url: `${process.env.NEXT_PUBLIC_CAT_API_BASE_URL}/upload`,
  }, formData);
