import Link from "next/link";
import Container from "@/components/Container";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <Container size="lg" asChild>
      <header className="sticky top-8 left-0 right-0 z-50 my-8">
        <div className="px-6 py-4 shadow-xl shadow-stone-900/80 bg-stone-900/40 backdrop-blur rounded-xl border border-stone-700 flex justify-between items-center">
          <div>
            <Link href="/" className="font-bold uppercase text-stone-100">
              Preston Lloyd
            </Link>
          </div>

          <nav className="flex gap-4">
            <NavItem href="/work">
              Work
            </NavItem>
            
            <NavItem href="/contact">
              Contact
            </NavItem>
          </nav>
        </div>
      </header>
    </Container>
  );
}