import Image from "next/image";
import type { Listing } from "@/lib/types/listing";

type Props = {
  listing: Listing;
};

export default function ListingCard({ listing }: Props) {
  const imageUrl =
    listing.listing_images?.[0]?.image_url ??
    `https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

  return (
    <div className="rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={listing.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 space-y-1">
        <h2 className="text-lg font-semibold">{listing.title}</h2>
        <p className="text-sm text-gray-600">{listing.address}</p>

        <p className="text-sm font-medium">
          {listing.rooms} rooms • {listing.measurement} m²
        </p>

        <p className="text-base font-bold text-green-700">
          {listing.price.toLocaleString("sv-SE")} kr
        </p>
      </div>
    </div>
  );
}
