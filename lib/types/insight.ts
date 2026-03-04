export type Insight = {
  id: number;
  listing_id: number;
  event_type: "view" | "save" | "inquiry";
  occurred_at: string; // datetime
  created_at: string;
  updated_at: string;
};

export type InsightSummary = {
  total_views: number;
  total_saves: number;
  total_inquiries: number;
  funnel: {
    views: number;
    saves: number;
    inquiries: number;
  };
  engagement_score: number;
};

export type InsightSeriesPoint = {
  date: string; // "2026-02-24"
  count: number;
};
