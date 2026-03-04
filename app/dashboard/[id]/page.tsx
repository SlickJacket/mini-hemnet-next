import type { Metadata } from "next";
import SummaryGrid from "@/components/dashboard/SummaryGrid";

type DashboardPageProps = {
  params: { id: string };
};

export const metadata: Metadata = {
  title: "Listing Insights Dashboard",
};

export default async function DashboardPage({ params }: DashboardPageProps) {
  const { id } = await params;

  return (
    <main className="p-6 max-w-6xl mx-auto space-y-6">
      <header className="flex items-baseline justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Insights dashboard</h1>
          <p className="text-sm text-gray-600">Listing ID: {id}</p>
        </div>
      </header>

      <SummaryGrid listingId={Number(id)} />
    </main>
  );
}
