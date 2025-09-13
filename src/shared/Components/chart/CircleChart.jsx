import React, { useMemo } from "react";

const CircleChart = ({
  data = [{ student: "2" }],
  total = 100,
  size = 60,
  strokeWidth = 6,
  color = "blue",
  bgColor = "#e6e6e6",
  showLabel = true,
  label = "N/A",
}) => {
  const safeTotal = Math.max(1, total);
  const value = Math.min(data.length, safeTotal);

  // SVG math
  const radius = useMemo(() => (size - strokeWidth) / 2, [size, strokeWidth]);
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);

  const percent = value / safeTotal;
  const offset = circumference * (1 - percent);

  return (
    <div
      style={{
        width: size,
        textAlign: "center",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Circle */}
      <div style={{ position: "relative", width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
            {/* Background ring */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={bgColor}
              strokeWidth={strokeWidth}
            />
            {/* Progress ring */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 600ms ease" }}
            />
          </g>
        </svg>

        {/* Percentage centered in circle */}
        {showLabel && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily: "Inter, system-ui, sans-serif",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700 }}>
              {Math.round(percent * 100)}%
            </div>
            <div style={{ fontSize: 9, color: "#666" }}>
              {value}/{safeTotal}
            </div>
          </div>
        )}
      </div>

      {/* Label always below circle */}
      <p className="mt-1 bg-gray-100 text-black rounded-md px-2 py-0.5 text-[10px]">
        {label}
      </p>
    </div>
  );
};

export default CircleChart;
