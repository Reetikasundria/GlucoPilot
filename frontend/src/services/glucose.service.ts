import { apiClient } from "@/lib/api-client";

import type {
  GlucoseReading,
} from "@/features/glucose/types";

export type CreateGlucosePayload = {
    value: number;
    context: GlucoseReading["context"];
    timestamp: string;
    note?: string;
    source?: GlucoseReading["source"];
};

export type GlucoseApiFilters = {
  startDate?: string;
  endDate?: string;
  source?: GlucoseReading["source"];
};

type BackendGlucoseReading = {
  id: number;
  value: number;
  context: GlucoseReading["context"];
  timestamp: string;
  note?: string | null;
  source: GlucoseReading["source"];
  created_at: string;
};

function formatTime(timestamp: string) {
  return new Date(timestamp).toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
    }
  );
}

function formatDate(timestamp: string) {
  const date = new Date(timestamp);

  return date.toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );
}

function mapBackendReading(
  reading: BackendGlucoseReading
): GlucoseReading {
  return {
    id: String(reading.id),

    value: reading.value,

    unit: "mg/dL",

    timestamp: reading.timestamp,

    date: formatDate(
      reading.timestamp
    ),

    time: formatTime(
      reading.timestamp
    ),

    context: reading.context,

    source: reading.source,

    note: reading.note ?? undefined,
  };
}

export const glucoseService = {
  async getReadings(
    filters?: GlucoseApiFilters
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

    const queryString =
      params.toString();

    const data =
      await apiClient<
        BackendGlucoseReading[]
      >(
        `/glucose${
          queryString
            ? `?${queryString}`
            : ""
        }`
      );

    return data.map(
      mapBackendReading
    );
  },

  async createReading(
    payload: CreateGlucosePayload
  ): Promise<GlucoseReading> {
    const data =
      await apiClient<BackendGlucoseReading>(
        "/glucose",
        {
          method: "POST",
          body: payload,
        }
      );
  
    return mapBackendReading(data);
  },

  async deleteReading(
    id: string
  ): Promise<void> {
    await apiClient<void>(
      `/glucose/${id}`,
      {
        method: "DELETE",
      }
    );
  },
};