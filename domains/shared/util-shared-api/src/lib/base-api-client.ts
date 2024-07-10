import { fetchWithValidation } from "./fetch-with-validation";
import { z } from 'zod';

const API_BASE_URL = process.env['API_BASE_URL'];

async function getRequest<ResponseData>(
  endpoint: string,
  responseDataSchema: z.ZodType<ResponseData>
) {
  return fetchWithValidation(`${API_BASE_URL}${endpoint}`, responseDataSchema, {
    method: 'GET',
  });
}

async function postRequest<ResponseData, RequestBody>(
  endpoint: string,
  responseDataSchema: z.ZodType<ResponseData>,
  body: RequestBody
) {
  return fetchWithValidation(`${API_BASE_URL}${endpoint}`, responseDataSchema, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

async function putRequest<ResponseData, RequestBody>(
  endpoint: string,
  responseDataSchema: z.ZodType<ResponseData>,
  body: RequestBody
) {
  return fetchWithValidation(`${API_BASE_URL}${endpoint}`, responseDataSchema, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

async function deleteRequest<ResponseData>(
  endpoint: string,
  responseDataSchema: z.ZodType<ResponseData>
) {
  return fetchWithValidation(`${API_BASE_URL}${endpoint}`, responseDataSchema, {
    method: 'DELETE',
  });
}

export const baseApi = {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
};
