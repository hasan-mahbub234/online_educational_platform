"use client";

export default function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-full px-5 py-3 outline-none border border-slate-200 shadow-sm focus:ring-2 focus:ring-orange-400"
    />
  );
}
