"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchListings } from "@/lib/api/listings";
import type { ListingsResponse } from "@/lib/types/listing";
import ListingCard from "@/components/listings/ListingCard";

export default function ListingsPage() {
  const { data, isLoading, isError } = useQuery<ListingsResponse>({
    queryKey: ["listings"],
    queryFn: fetchListings,
  });

  if (isLoading) {
    return <div className="p-6">Loading listings…</div>;
  }

  if (isError) {
    return <div className="p-6 text-red-600">Failed to load listings.</div>;
  }

  const listings = data?.listings ?? [];

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Listings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

    </main>
  );
}
