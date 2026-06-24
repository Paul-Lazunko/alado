export enum HttpMethod {
  GET = 'GET',
  QUERY = 'QUERY',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  OPTIONS = 'OPTIONS',
  HEAD = 'HEAD',
  DELETE = 'DELETE',
}

export const httpMethods = Object.values(HttpMethod);
