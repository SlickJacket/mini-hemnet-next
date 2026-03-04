type Props = {
  label: string;
  value: number | string;
  accent?: "blue" | "green" | "purple" | "orange";
  trend?: number; // percent change
};

const accentMap = {
  blue: "text-blue-600 bg-blue-50",
  green: "text-green-600 bg-green-50",
  purple: "text-purple-600 bg-purple-50",
  orange: "text-orange-600 bg-orange-50",
};

export default function SummaryCard({
  label,
  value,
  accent = "blue",
  trend,
}: Props) {
  const trendColor =
    trend === undefined
      ? ""
      : trend > 0
        ? "text-green-600"
        : trend < 0
          ? "text-red-600"
          : "text-gray-500";

  const trendIcon =
    trend === undefined ? "" : trend > 0 ? "▲" : trend < 0 ? "▼" : "→";

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col gap-1">
      <span className="text-sm text-gray-600">{label}</span>
      <p className="text-xs text-gray-500">Lifetime total</p>
      <span className={`text-2xl font-semibold ${accentMap[accent]}`}>
        {value}
      </span>

      {trend !== undefined && (
        <span className={`text-sm font-medium ${trendColor}`}>
          {trendIcon} {Math.abs(trend)}%
        </span>
      )}
    </div>
  );
}
