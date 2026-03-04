"use client";

import { useQuery } from "@tanstack/react-query";
import IntervalSelector from "./IntervalSelector";
import LineChart from "./LineChart";
import { fetchInsightSeries } from "@/lib/api/insights";
import type { InsightSeriesPoint } from "@/lib/types/insight";

export default function ChartsGrid({
  listingId,
  interval,
}: {
  listingId: number;
  interval: "daily" | "weekly" | "monthly";
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["insight-series", listingId, interval],
    queryFn: () => fetchInsightSeries(listingId, interval),
  });

  console.log("series raw", data);

  if (isLoading) return <p className="text-gray-500">Loading charts…</p>;
  if (isError || !data)
    return <p className="text-red-600">Failed to load charts.</p>;

  const toPoints = (series: Record<string, number>): InsightSeriesPoint[] =>
    Object.entries(series).map(([date, value]) => ({ date, value }));

  const views = toPoints(data.data.views);
  const saves = toPoints(data.data.saves);
  const inquiries = toPoints(data.data.inquiries);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <LineChart
          title="Views Over Time"
          data={views}
          color="rgb(37, 99, 235)"
        />
        <LineChart
          title="Saves Over Time"
          data={saves}
          color="rgb(16, 185, 129)"
        />
        <LineChart
          title="Inquiries Over Time"
          data={inquiries}
          color="rgb(147, 51, 234)"
        />
      </div>
    </div>
  );
}
