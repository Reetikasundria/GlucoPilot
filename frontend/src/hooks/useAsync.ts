"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

type AsyncState<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

export default function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate = true
) {
  const [state, setState] =
    useState<AsyncState<T>>({
      data: null,
      loading: immediate,
      error: null,
    });

  const execute = useCallback(async () => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    try {
      const data = await asyncFunction();

      setState({
        data,
        loading: false,
        error: null,
      });

      return data;
    } catch (error) {
      const normalizedError =
        error instanceof Error
          ? error
          : new Error(
              "Something went wrong"
            );

      setState({
        data: null,
        loading: false,
        error: normalizedError,
      });

      throw normalizedError;
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute().catch(() => {
        // Error is already stored in state.
      });
    }
  }, [execute, immediate]);

  return {
    ...state,
    execute,
  };
}