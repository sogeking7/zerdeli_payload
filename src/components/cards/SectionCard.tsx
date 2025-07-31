import React from 'react';

interface SectionCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
}

export default function SectionCard({ icon, title }: SectionCardProps) {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 w-[294px] h-40 rounded-2xl bg-white border border-black/[0.12]"
      style={{ boxShadow: '0px 3px 16px 1px rgba(0,0,0,0.04)' }}
    >
      {icon}
      <p className="text-lg font-semibold text-center text-black px-2">
        {title}
      </p>
    </div>
  );
}