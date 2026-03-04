import { api } from "./client";
import type {
  Insight,
  InsightSummary,
  InsightSeriesPoint,
  InsightSeriesResponse,
} from "../types/insight";

export async function fetchInsights(listingId: number): Promise<Insight[]> {
  const res = await api.get(`/listings/${listingId}/insights`);
  return res.data;
}

export async function fetchInsightSummary(
  listingId: number,
): Promise<InsightSummary> {
  const res = await api.get(`/listings/${listingId}/insights/summary`);
  return res.data;
}

export async function fetchInsightSeries(
  listingId: number,
  interval: "daily" | "weekly" | "monthly",
): Promise<InsightSeriesResponse> {
  const res = await api.get(`/listings/${listingId}/insights/timeseries`, {
    params: { interval },
  });
  return res.data;
}

export async function recordView(listingId: number | string) {
  return api.post(`/listings/${listingId}/view`);
}

export async function recordSave(listingId: number | string) {
  return api.post(`/listings/${listingId}/save_event`);
}

export async function recordInquiry(listingId: number | string) {
  return api.post(`/listings/${listingId}/inquiry`);
}
