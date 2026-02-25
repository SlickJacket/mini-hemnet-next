export type ListingImage = {
  id: number;
  image_url: string;
};

export type Listing = {
  id: number;
  title: string;
  address: string;

  // Rails decimals come through as strings
  rooms: string;        // decimal
  bathrooms: string;    // decimal
  measurement: string;  // decimal

  // Rails integers come through as numbers
  price: number;
  floors: number;

  description: string;

  // Rails date comes through as a string
  date_sold: string | null;

  // Rails timestamps come through as strings
  created_at: string;
  updated_at: string;

  listing_images: ListingImage[];
};

export type ListingsResponse = {
  listings: Listing[];
  pagination: any; // we can refine later
};

