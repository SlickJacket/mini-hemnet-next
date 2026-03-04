export type Insight = {
  id: number;
  listing_id: number;
  event_type: "view" | "save" | "inquiry";
  occurred_at: string;
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
  trend: {
    views: number;
    saves: number;
    inquiries: number;
  };
};

export type InsightSeriesResponse = {
  interval: "daily" | "weekly" | "monthly" | string;
  data: {
    views: Record<string, number>;
    saves: Record<string, number>;
    inquiries: Record<string, number>;
  };
  trend: {
    views: number;
    saves: number;
    inquiries: number;
  };
};

export type InsightSeriesPoint = {
  date: string;
  value: number;
};
