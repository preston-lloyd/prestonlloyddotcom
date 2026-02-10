export default function Square({ color = "bg-yellow-500", className = "" }: { color?: string, className?: string }) {
  return (
    <div className={`${color} aspect-square rounded-xl ${className}`} />
  )
}