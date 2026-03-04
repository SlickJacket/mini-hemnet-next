import type { Metadata } from "next";

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

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="h-24 rounded-lg border border-gray-200 bg-white shadow-sm" />
        <div className="h-24 rounded-lg border border-gray-200 bg-white shadow-sm" />
        <div className="h-24 rounded-lg border border-gray-200 bg-white shadow-sm" />
        <div className="h-24 rounded-lg border border-gray-200 bg-white shadow-sm" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-64 rounded-lg border border-gray-200 bg-white shadow-sm" />
        <div className="h-64 rounded-lg border border-gray-200 bg-white shadow-sm" />
      </section>
    </main>
  );
}
