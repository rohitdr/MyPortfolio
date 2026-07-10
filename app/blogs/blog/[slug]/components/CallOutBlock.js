"use client";


import { FaInfo, FaLightbulb } from "react-icons/fa";
import { FaCircleCheck, FaTriangleExclamation } from "react-icons/fa6";

const variants = {
  tip: {
    icon: FaLightbulb,
    border: "border-l-emerald-500",
    iconColor: "text-emerald-400",
  },

  note: {
    icon: FaInfo,
    border: "border-l-blue-500",
    iconColor: "text-blue-400",
  },

  warning: {
    icon: FaTriangleExclamation,
    border: "border-l-yellow-500",
    iconColor: "text-yellow-400",
  },

  info: {
    icon: FaCircleCheck,
    border: "border-l-purple-500",
    iconColor: "text-purple-400",
  },
};

export default function CalloutBlock({
  variant = "note",
  title,
  text,
}) {
  const current = variants[variant] || variants.note;

  const Icon = current.icon;

  return (
    <div
      className={`my-12 rounded-2xl border border-white/10 ${current.border} bg-white/[0.03] p-6`}
    >
      <div className="flex items-start gap-4">
        <Icon
          className={`mt-1 h-5 w-5 shrink-0 ${current.iconColor}`}
        />

        <div>
          {title && (
            <h4 className="mb-2 text-base font-medium text-white">
              {title}
            </h4>
          )}

          <p className="leading-8 text-zinc-300">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}