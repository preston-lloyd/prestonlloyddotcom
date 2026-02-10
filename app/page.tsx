import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Square from "@/components/Square";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import FooterCTA from "@/components/Footer/FooterCTA";

import profileImage from "@/imgs/profile.avif";

export function generateMetadata() {
  return {
    title: "Preston Lloyd",
    description: "Preston Lloyd is a software engineer and designer.",
  };
}

export default function Home() {
  return (
    <>
      <Container asChild>
        <section>
          <div className="grid grid-cols-2 gap-4 items-center min-h-[70vh]">
            <div className="flex flex-col gap-4">
              <Heading size="8xl" asChild>
                <h1>
                  Hello, I'm Preston
                </h1>
              </Heading>

              <p className="text-lg">
                I'm a software engineer based in the US.
              </p>

              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/work">
                    What I Do
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Square color="bg-yellow-500/40" className="border border-yellow-500/40 w-56 absolute -top-8 left-4 -z-1" />
              <Image className="border border-white/60 rounded-xl w-full grayscale" src={profileImage} alt="Preston Lloyd" width={1024} height={1024} />
              <Square color="bg-yellow-500/40" className="border border-yellow-500/40 backdrop-blur w-36 absolute -bottom-12 -right-8" />
            </div>
          </div>
        </section>
      </Container>

      <Container asChild>
        <section className="py-24">
          <Heading size="4xl" className="mb-8">My Tools</Heading>

          <div className="grid grid-cols-3 gap-4">
            <div className="border border-stone-700 rounded-xl p-4">
              <Heading size="xl" asChild className="mb-4">
                <h3>Languages</h3>
              </Heading>

              <ul>
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>PHP</li>
                <li>C#</li>
              </ul>
            </div>

            <div className="border border-stone-700 rounded-xl p-4">
              <Heading size="xl" asChild className="mb-4">
                <h3>Frameworks</h3>
              </Heading>

              <ul>
                <li>React/Next.js</li>
                <li>Vue</li>
                <li>Node.js</li>
                <li>Laravel</li>
                <li>ASP.NET</li>
              </ul>
            </div>

            <div className="border border-stone-700 rounded-xl p-4">
              <Heading size="xl" asChild className="mb-4">
                <h3>Architecture</h3>
              </Heading>

              <ul>
                <li>Kubernetes</li>
                <li>PostgreSQL/MySQL</li>
                <li>Redis</li>
              </ul>
            </div>
          </div>
        </section>
      </Container>

      <Container asChild>
        <section className="py-24">
          <Heading>Brands I've Worked With</Heading>

          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Square key={index} />
            ))}
          </div>
        </section>
      </Container>

      <FooterCTA />
    </>
  );
}
