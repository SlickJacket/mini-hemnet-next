"use client";

import { useQuery } from "@tanstack/react-query";
import SummaryCard from "./SummaryCard";
import { fetchInsightSummary } from "@/lib/api/insights";

export default function SummaryGrid({
  listingId,
  interval,
}: {
  listingId: number;
  interval: "daily" | "weekly" | "monthly";
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["insight-summary", listingId, interval],
    queryFn: () => fetchInsightSummary(listingId, interval),
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="h-24 bg-gray-100 animate-pulse rounded-xl" />
        <div className="h-24 bg-gray-100 animate-pulse rounded-xl" />
        <div className="h-24 bg-gray-100 animate-pulse rounded-xl" />
        <div className="h-24 bg-gray-100 animate-pulse rounded-xl" />
      </div>
    );
  }

  if (isError || !data) {
    return <p className="text-red-600">Failed to load insights.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <SummaryCard
        label="Total Views"
        value={data.total_views}
        accent="blue"
        trend={data.trend.views}
      />

      <SummaryCard
        label="Total Saves"
        value={data.total_saves}
        accent="green"
        trend={data.trend.saves}
      />

      <SummaryCard
        label="Total Inquiries"
        value={data.total_inquiries}
        accent="purple"
        trend={data.trend.inquiries}
      />

      <SummaryCard
        label="Engagement Score"
        value={data.engagement_score}
        accent="orange"
        // optional: no trend for engagement score unless backend provides it
      />
    </div>
  );
}
