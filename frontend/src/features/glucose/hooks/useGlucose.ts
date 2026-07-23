"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  glucoseService,
} from "@/services/glucose.service";

import type {
  GlucoseFilter,
  GlucoseReading,
} from "../types";

export default function useGlucose() {
  const [readings, setReadings] =
    useState<GlucoseReading[]>([]);

  const [filters, setFilters] =
    useState<GlucoseFilter>({
      timeRange: "7d",
      context: "all",
    });

  const [isLogFormOpen, setIsLogFormOpen] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<Error | null>(null);

  const loadReadings = useCallback(
    async () => {
      try {
        setLoading(true);
        setError(null);

        const data =
          await glucoseService.getReadings();

        setReadings(data);
      } catch (error) {
        const normalizedError =
          error instanceof Error
            ? error
            : new Error(
                "Failed to load glucose readings"
              );

        setError(normalizedError);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    loadReadings();
  }, [loadReadings]);

  const filteredReadings = useMemo(() => {
    let result = [...readings];
  
    // Context filter
    if (filters.context !== "all") {
      result = result.filter(
        (reading) =>
          reading.context === filters.context
      );
    }
  
    // Time-range filter
    const now = new Date();
  
    const daysMap: Record<
      GlucoseFilter["timeRange"],
      number
    > = {
      today: 1,
      "7d": 7,
      "14d": 14,
      "30d": 30,
    };
  
    const days =
      daysMap[filters.timeRange];
  
    const startDate = new Date(now);
  
    startDate.setDate(
      now.getDate() - days
    );
  
    result = result.filter((reading) => {
      const readingDate =
        new Date(reading.timestamp);
  
      return readingDate >= startDate;
    });
  
    return result;
  }, [readings, filters]);

  const averageGlucose = useMemo(() => {
    if (!filteredReadings.length) {
      return 0;
    }

    const total =
      filteredReadings.reduce(
        (sum, reading) =>
          sum + reading.value,
        0
      );

    return Math.round(
      total / filteredReadings.length
    );
  }, [filteredReadings]);

  const highestGlucose = useMemo(() => {
    if (!filteredReadings.length) {
      return 0;
    }

    return Math.max(
      ...filteredReadings.map(
        (reading) =>
          reading.value
      )
    );
  }, [filteredReadings]);

  const lowestGlucose = useMemo(() => {
    if (!filteredReadings.length) {
      return 0;
    }

    return Math.min(
      ...filteredReadings.map(
        (reading) =>
          reading.value
      )
    );
  }, [filteredReadings]);

  const inRangePercentage = useMemo(() => {
    if (!filteredReadings.length) {
      return 0;
    }

    const inRange =
      filteredReadings.filter(
        (reading) =>
          reading.value >= 70 &&
          reading.value <= 180
      ).length;

    return Math.round(
      (inRange /
        filteredReadings.length) *
        100
    );
  }, [filteredReadings]);

  const addReading = async (data: {
    value: number;
    context: GlucoseReading["context"];
    timestamp: string;
    note?: string;
  }) => {
    try {
      const today = new Date()
        .toISOString()
        .split("T")[0];
  
      const newReading =
        await glucoseService.createReading({
          value: data.value,
          context: data.context,
          timestamp: `${today}T${data.timestamp}:00`,
          note: data.note,
        });
  
      setReadings((previousReadings) => [
        newReading,
        ...previousReadings,
      ]);
  
      setIsLogFormOpen(false);
    } catch (error) {
      const normalizedError =
        error instanceof Error
          ? error
          : new Error(
              "Failed to add glucose reading"
            );
  
      setError(normalizedError);
    }
  };

  return {
    readings,

    filteredReadings,

    filters,

    averageGlucose,

    highestGlucose,

    lowestGlucose,

    inRangePercentage,

    isLogFormOpen,

    loading,

    error,

    setFilters,

    setIsLogFormOpen,

    addReading,

    reloadReadings: loadReadings,
  };
}