export default function Divider({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-divider ${className}`} />;
}
