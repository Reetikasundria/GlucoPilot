"use client";

import { useMemo, useState } from "react";

import { initialGlucoseReadings } from "../mockData";
import {
  GlucoseFilter,
  GlucoseReading,
} from "../types";

export default function useGlucose() {
  const [readings, setReadings] =
    useState<GlucoseReading[]>(
      initialGlucoseReadings
    );

  const [filters, setFilters] =
    useState<GlucoseFilter>({
      timeRange: "7d",
      context: "all",
    });

  const [isLogFormOpen, setIsLogFormOpen] =
    useState(false);

  const filteredReadings = useMemo(() => {
    let result = [...readings];

    if (filters.context !== "all") {
      result = result.filter(
        (reading) =>
          reading.context === filters.context
      );
    }

    return result;
  }, [readings, filters]);

  const averageGlucose = useMemo(() => {
    if (!filteredReadings.length) return 0;

    const total = filteredReadings.reduce(
      (sum, reading) =>
        sum + reading.value,
      0
    );

    return Math.round(
      total / filteredReadings.length
    );
  }, [filteredReadings]);

  const highestGlucose = useMemo(() => {
    if (!filteredReadings.length) return 0;

    return Math.max(
      ...filteredReadings.map(
        (reading) => reading.value
      )
    );
  }, [filteredReadings]);

  const lowestGlucose = useMemo(() => {
    if (!filteredReadings.length) return 0;

    return Math.min(
      ...filteredReadings.map(
        (reading) => reading.value
      )
    );
  }, [filteredReadings]);

  const inRangePercentage = useMemo(() => {
    if (!filteredReadings.length) return 0;

    const inRange = filteredReadings.filter(
      (reading) =>
        reading.value >= 70 &&
        reading.value <= 180
    ).length;

    return Math.round(
      (inRange / filteredReadings.length) * 100
    );
  }, [filteredReadings]);

  const addReading = (data: {
    value: number;
    context: GlucoseReading["context"];
    time: string;
    note?: string;
  }) => {
    const newReading: GlucoseReading = {
      id: crypto.randomUUID(),
      value: data.value,
      unit: "mg/dL",
      timestamp: new Date().toISOString(),
      date: "Today",
      time: data.time,
      context: data.context,
      source: "manual",
      note: data.note,
    };

    setReadings((previousReadings) => [
      newReading,
      ...previousReadings,
    ]);

    setIsLogFormOpen(false);
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

    setFilters,
    setIsLogFormOpen,

    addReading,
  };
}