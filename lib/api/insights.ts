import { api } from "./client";
import type { Insight, InsightSummary, InsightSeriesPoint } from "../types/insight";

export async function fetchInsights(listingId: number): Promise<Insight[]> {
  const res = await api.get(`/listings/${listingId}/insights`);
  return res.data;
}

export async function fetchInsightSummary(listingId: number): Promise<InsightSummary> {
  const res = await api.get(`/listings/${listingId}/insights/summary`);
  return res.data;
}

export async function fetchInsightSeries(
  listingId: number,
  interval: "daily" | "weekly" | "monthly"
): Promise<InsightSeriesPoint[]> {
  const res = await api.get(`/listings/${listingId}/insights/series`, {
    params: { interval },
  });
  return res.data;
}

// ⭐ NEW: Record an insight event
export async function recordInsight(
  listingId: number,
  event_type: "view" | "save" | "inquiry"
): Promise<Insight> {
  const res = await api.post(`/listings/${listingId}/insights`, {
    event_type,
  });

  return res.data;
}
