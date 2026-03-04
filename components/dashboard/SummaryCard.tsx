type Props = {
  label: string;
  value: number | string;
  accent?: "blue" | "green" | "purple" | "orange";
};

const accentMap = {
  blue: "text-blue-600 bg-blue-50",
  green: "text-green-600 bg-green-50",
  purple: "text-purple-600 bg-purple-50",
  orange: "text-orange-600 bg-orange-50",
};

export default function SummaryCard({ label, value, accent = "blue" }: Props) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col gap-1">
      <span className="text-sm text-gray-600">{label}</span>
      <span className={`text-2xl font-semibold ${accentMap[accent]}`}>
        {value}
      </span>
    </div>
  );
}
