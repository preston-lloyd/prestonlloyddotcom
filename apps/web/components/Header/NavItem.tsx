import Link from "next/link";

export default function NavItem({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <Link href={href} className="text-stone-300 font-bold lowercase hover:text-yellow-500 transition">
      {children}
    </Link>
  )
}