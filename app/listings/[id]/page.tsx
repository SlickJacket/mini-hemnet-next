"use client";

import { use, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchListing } from "@/lib/api/listings";
import Image from "next/image";
import { recordView, recordSave, recordInquiry } from "@/lib/api/insights";

export default function ListingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const {
    data: listing,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["listing", id],
    queryFn: () => fetchListing(id),
  });

  useEffect(() => {
    recordView(id);
  }, [id]);

  if (isLoading) return <div className="p-6">Loading listing…</div>;
  if (isError || !listing)
    return <div className="p-6 text-red-600">Listing not found.</div>;

  const images = listing.listing_images ?? [];

  return (
    <main className="p-6 space-y-6">
      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative h-64 w-full rounded-lg overflow-hidden"
          >
            <Image
              src={img.image_url}
              alt={listing.title}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Title + Address */}
      <div>
        <h1 className="text-3xl font-bold">{listing.title}</h1>
        <p className="text-gray-600 text-lg">{listing.address}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-xl font-semibold">
            {listing.price.toLocaleString("sv-SE")} kr
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Rooms</p>
          <p className="text-xl font-semibold">{listing.rooms}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Bathrooms</p>
          <p className="text-xl font-semibold">{listing.bathrooms}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Size</p>
          <p className="text-xl font-semibold">{listing.measurement} m²</p>
        </div>
      </div>

      {/* Insights Actions */}
      <div className="flex gap-4">
        <button
          onClick={() => recordSave(listing.id)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save
        </button>

        <button
          onClick={() => recordInquiry(listing.id)}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Inquiry
        </button>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-gray-700 leading-relaxed">{listing.description}</p>
      </div>
    </main>
  );
}
