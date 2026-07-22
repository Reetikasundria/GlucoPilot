import { apiClient } from "@/lib/api-client";

import type {
  GlucoseReading,
} from "@/features/glucose/types";

export type CreateGlucosePayload = {
  value: number;
  timestamp: string;
  mealContext?: string;
};

export type GlucoseFilters = {
  startDate?: string;
  endDate?: string;
  source?: "manual" | "cgm";
};

export const glucoseService = {
  async getReadings(
    filters?: GlucoseFilters
  ): Promise<GlucoseReading[]> {
    const params = new URLSearchParams();

    if (filters?.startDate) {
      params.set(
        "start_date",
        filters.startDate
      );
    }

    if (filters?.endDate) {
      params.set(
        "end_date",
        filters.endDate
      );
    }

    if (filters?.source) {
      params.set(
        "source",
        filters.source
      );
    }

    const queryString = params.toString();

    return apiClient<GlucoseReading[]>(
      `/glucose${
        queryString
          ? `?${queryString}`
          : ""
      }`
    );
  },

  async createReading(
    payload: CreateGlucosePayload
  ): Promise<GlucoseReading> {
    return apiClient<GlucoseReading>(
      "/glucose",
      {
        method: "POST",
        body: payload,
      }
    );
  },

  async deleteReading(
    id: string
  ): Promise<void> {
    await apiClient(
      `/glucose/${id}`,
      {
        method: "DELETE",
      }
    );
  },
};