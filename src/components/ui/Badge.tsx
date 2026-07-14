interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span
      className="
      rounded-full
      border
      border-zinc-700
      bg-zinc-900/70
      px-4
      py-2
      text-sm
      text-zinc-300
      backdrop-blur
      "
    >
      {text}
    </span>
  );
}