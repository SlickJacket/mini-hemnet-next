"use client";

type Props = {
  value: "daily" | "weekly" | "monthly";
  onChange: (v: "daily" | "weekly" | "monthly") => void;
};

export default function IntervalSelector({ value, onChange }: Props) {
  const options: Array<"daily" | "weekly" | "monthly"> = [
    "daily",
    "weekly",
    "monthly",
  ];

  return (
    <div className="flex gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-3 py-1 rounded-lg border text-sm transition
            ${
              value === opt
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }
          `}
        >
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </button>
      ))}
    </div>
  );
}
