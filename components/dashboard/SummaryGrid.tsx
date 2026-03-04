"use client";

import { useQuery } from "@tanstack/react-query";
import SummaryCard from "./SummaryCard";
import { fetchInsightSummary } from "@/lib/api/insights";

export default function SummaryGrid({ listingId }: { listingId: number }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["insight-summary", listingId],
    queryFn: () => fetchInsightSummary(listingId),
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
      <SummaryCard label="Total Views" value={data.total_views} accent="blue" />
      <SummaryCard label="Saves" value={data.total_saves} accent="green" />
      <SummaryCard
        label="Inquiries"
        value={data.total_inquiries}
        accent="purple"
      />
      <SummaryCard
        label="Engagement Score"
        value={data.engagement_score}
        accent="orange"
      />
    </div>
  );
}
