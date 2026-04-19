type Size = "sm" | "md" | "lg";

const WORD_CLASS: Record<Size, string> = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-4xl",
};

const TAG_CLASS: Record<Size, string> = {
  sm: "text-[9px] tracking-[0.2em] mt-1",
  md: "text-[10px] tracking-[0.22em] mt-1.5",
  lg: "text-[10px] tracking-[0.22em] mt-1.5",
};

export function Wordmark({ size = "lg" }: { size?: Size }) {
  return (
    <div className="text-center">
      <div
        className={`${WORD_CLASS[size]} font-semibold tracking-tight leading-none`}
      >
        etell<span className="text-sky-600">.</span>
      </div>
      <div className={`${TAG_CLASS[size]} text-muted uppercase`}>
        Experience Intelligence
      </div>
    </div>
  );
}
