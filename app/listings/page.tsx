"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchListings } from "@/lib/api/listings";
import type { ListingsResponse } from "@/lib/types/listing";
import ListingCard from "@/components/listings/ListingCard";
import { useListingFilters } from "@/lib/store/useFilters";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import ListingFilters from "@/components/listings/ListingFilters";

export default function ListingsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { filters, setFilter } = useListingFilters();

  // Load filters from URL on first render
  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());

    if (params.min_price) setFilter("min_price", Number(params.min_price));
    if (params.max_price) setFilter("max_price", Number(params.max_price));
    if (params.min_rooms) setFilter("min_rooms", Number(params.min_rooms));
    if (params.area) setFilter("area", params.area);
    if (params.sold) setFilter("sold", params.sold === "true");
    if (params.sort) setFilter("sort", params.sort);
  }, []);

  // Sync filters → URL
  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.min_price) params.set("min_price", String(filters.min_price));
    if (filters.max_price) params.set("max_price", String(filters.max_price));
    if (filters.min_rooms) params.set("min_rooms", String(filters.min_rooms));
    if (filters.area) params.set("area", filters.area);
    if (filters.sold !== undefined) params.set("sold", String(filters.sold));
    if (filters.sort) params.set("sort", filters.sort);

    router.replace(`/listings?${params.toString()}`);
  }, [filters]);

  // Fetch listings with filters
  const { data, isLoading, isError } = useQuery<ListingsResponse>({
    queryKey: ["listings", filters],
    queryFn: () => fetchListings(filters),
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
      <div className="sticky top-0 z-20 py-4">
        <ListingFilters />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </main>
  );
}
