"use client";

import { useState, use } from "react";
import SummaryGrid from "@/components/dashboard/SummaryGrid";
import ChartsGrid from "@/components/dashboard/ChartsGrid";
import IntervalSelector from "@/components/dashboard/IntervalSelector";

type DashboardPageProps = {
  params: Promise<{ id: string }>;
};

export default function DashboardPage({ params }: DashboardPageProps) {
  const { id } = use(params);

  const [interval, setInterval] = useState<"daily" | "weekly" | "monthly">(
    "daily",
  );

  return (
    <main className="p-6 max-w-6xl mx-auto space-y-6">
      <header className="flex items-baseline justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Insights dashboard</h1>
          <p className="text-sm text-gray-600">Listing ID: {id}</p>
        </div>

        <IntervalSelector value={interval} onChange={setInterval} />
      </header>

      <SummaryGrid listingId={Number(id)} interval={interval} />
      <ChartsGrid listingId={Number(id)} interval={interval} />
    </main>
  );
}
