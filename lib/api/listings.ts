import { api } from "./client";
import type { Listing } from "../types/listing";

export async function fetchListings(): Promise<Listing[]> {
  const res = await api.get<Listing[]>("/listings");
  return res.data;
}

export async function fetchListing(id: string | number): Promise<Listing> {
  const res = await api.get<Listing>(`/listings/${id}`);
  return res.data;
}

export async function createListing(data: Partial<Listing>) {
  const res = await api.post("/listings", data);
  return res.data;
}

export async function updateListing(id: number, data: Partial<Listing>) {
  const res = await api.put(`/listings/${id}`, data);
  return res.data;
}

export async function deleteListing(id: number) {
  const res = await api.delete(`/listings/${id}`);
  return res.data;
}
