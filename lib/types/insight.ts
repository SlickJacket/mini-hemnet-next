export type Insight = {
  id: number;
  listing_id: number;
  event_type: "view" | "save" | "inquiry";
  occurred_at: string; // datetime
  created_at: string;
  updated_at: string;
};

export type InsightSummary = {
  views: number;
  saves: number;
  inquiries: number;
};

export type InsightSeriesPoint = {
  date: string;  // "2026-02-24"
  count: number;
};
