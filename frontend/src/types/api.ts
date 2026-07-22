export type ApiResponse<T> = {
    data: T;
    message?: string;
    success?: boolean;
  };
  
  export type ApiErrorResponse = {
    detail?: string;
    message?: string;
    error?: string;
  };
  
  export type RequestOptions = {
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: unknown;
    headers?: HeadersInit;
    signal?: AbortSignal;
  };