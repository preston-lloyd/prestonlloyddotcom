import Link from "next/link";
import Container from "@/components/Container";

export default function Header() {
  return (
    <Container asChild>
        <header className="fixed top-0 left-0 right-0 z-50 mt-8 px-6 py-4 bg-black/40 backdrop-blur-sm rounded-xl border border-white/15">
            <div>
                <Link href="/" className="font-bold uppercase">
                    Preston Lloyd
                </Link>
            </div>
            <div>

            </div>
        </header>
    </Container>
  );
}