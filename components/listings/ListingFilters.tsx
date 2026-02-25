"use client";

import { useListingFilters } from "@/lib/store/useFilters";

export default function ListingFilters() {
  const { filters, setFilter, resetFilters } = useListingFilters();

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-wrap gap-6 items-end">
      {/* Min Price */}
      <FilterBlock label="Min Price">
        <select
          className="border border-gray-300 rounded-lg p-2 bg-white text-gray-800 w-32 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          value={filters.min_price ?? ""}
          onChange={(e) =>
            setFilter(
              "min_price",
              e.target.value ? Number(e.target.value) : undefined,
            )
          }
        >
          <option value="">Any</option>
          <option value="2000000">2M</option>
          <option value="3000000">3M</option>
          <option value="4000000">4M</option>
          <option value="5000000">5M</option>
        </select>
      </FilterBlock>

      {/* Max Price */}
      <FilterBlock label="Max Price">
        <select
          className="border border-gray-300 rounded-lg p-2 bg-white text-gray-800 w-32 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          value={filters.max_price ?? ""}
          onChange={(e) =>
            setFilter(
              "max_price",
              e.target.value ? Number(e.target.value) : undefined,
            )
          }
        >
          <option value="">Any</option>
          <option value="4000000">4M</option>
          <option value="6000000">6M</option>
          <option value="8000000">8M</option>
        </select>
      </FilterBlock>

      {/* Rooms */}
      <FilterBlock label="Rooms">
        <select
          className="border border-gray-300 rounded-lg p-2 bg-white text-gray-800 w-24 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          value={filters.min_rooms ?? ""}
          onChange={(e) =>
            setFilter(
              "min_rooms",
              e.target.value ? Number(e.target.value) : undefined,
            )
          }
        >
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </FilterBlock>

      {/* Area */}
      <FilterBlock label="Area">
        <select
          className="border border-gray-300 rounded-lg p-2 bg-white text-gray-800 w-32 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          value={filters.area ?? ""}
          onChange={(e) => setFilter("area", e.target.value || undefined)}
        >
          <option value="">Any</option>
          <option value="Solna">Solna</option>
          <option value="Vasastan">Vasastan</option>
          <option value="Södermalm">Södermalm</option>
        </select>
      </FilterBlock>

      {/* Sold */}
      <FilterBlock label="Status">
        <select
          className="border border-gray-300 rounded-lg p-2 bg-white text-gray-800 w-24 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          value={filters.sold ?? ""}
          onChange={(e) =>
            setFilter(
              "sold",
              e.target.value === "" ? undefined : e.target.value === "true",
            )
          }
        >
          <option value="">Any</option>
          <option value="false">For Sale</option>
          <option value="true">Sold</option>
        </select>
      </FilterBlock>

      {/* Sort */}
      <FilterBlock label="Sort">
        <select
          className="border border-gray-300 rounded-lg p-2 bg-white text-gray-800 w-32 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          value={filters.sort ?? ""}
          onChange={(e) => setFilter("sort", e.target.value || undefined)}
        >
          <option value="">Default</option>
          <option value="price_desc">Price ↓</option>
          <option value="rooms_asc">Rooms ↑</option>
          <option value="newest">Newest</option>
        </select>
      </FilterBlock>

      {/* Reset */}
      <button
        onClick={resetFilters}
        className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
      >
        Reset
      </button>
    </div>
  );
}

function FilterBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {children}
    </div>
  );
}
