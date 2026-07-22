import type {
    ApiErrorResponse,
    RequestOptions,
  } from "@/types/api";
  
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:8000/api";
  
  export class ApiError extends Error {
    status: number;
    data?: ApiErrorResponse;
  
    constructor(
      message: string,
      status: number,
      data?: ApiErrorResponse
    ) {
      super(message);
  
      this.name = "ApiError";
      this.status = status;
      this.data = data;
    }
  }
  
  async function parseResponse<T>(
    response: Response
  ): Promise<T> {
    const contentType =
      response.headers.get("content-type");
  
    const isJson = contentType?.includes(
      "application/json"
    );
  
    const data = isJson
      ? await response.json()
      : await response.text();
  
    if (!response.ok) {
      const errorData =
        typeof data === "object"
          ? (data as ApiErrorResponse)
          : undefined;
  
      const errorMessage =
        errorData?.detail ||
        errorData?.message ||
        errorData?.error ||
        "Something went wrong";
  
      throw new ApiError(
        errorMessage,
        response.status,
        errorData
      );
    }
  
    return data as T;
  }
  
  export async function apiClient<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const {
      method = "GET",
      body,
      headers,
      signal,
    } = options;
  
    const response = await fetch(
      `${API_URL}${endpoint}`,
      {
        method,
  
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
  
        body: body
          ? JSON.stringify(body)
          : undefined,
  
        signal,
  
        credentials: "include",
      }
    );
  
    return parseResponse<T>(response);
  }