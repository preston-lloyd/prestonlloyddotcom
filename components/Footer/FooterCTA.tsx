import Container from "@/components/Container";
import Button from "@/components/Button";
import Link from "next/link";

export default function FooterCTA() {
  return (
    <Container size="sm" className="mt-8">
      <section className="bg-yellow-500 text-white p-8 rounded-xl flex flex-col lg:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-widest">
            Ready to Work Together?
          </h2>

          <p className="text-lg text-yellow-100 text-balance">
            I'm always looking for new projects and collaborations. If you have a project in mind, please get in touch.
          </p>
        </div>

        <div className="shrink-0">
          <Link href="/contact" className="inline-flex text-center uppercase font-medium tracking-widest px-4 py-2 bg-white text-yellow-500 rounded-md">
            Contact Me
          </Link>
        </div>
      </section>
    </Container>
  )
}