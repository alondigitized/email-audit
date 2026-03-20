export function ScoreBadge({ score }: { score: string }) {
  return (
    <span className="inline-block px-3 py-2 rounded-full bg-gray-100 font-bold text-sm whitespace-nowrap shrink-0">
      {score}
    </span>
  );
}
