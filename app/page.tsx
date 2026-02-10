import Image from "next/image";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="min-h-screen py-20">
      <Container>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="col-span-1 ">
              <div className="bg-red-500 aspect-square px-6 py-4 rounded-xl">
                <h2 className="text-2xl font-bold">
                  {index + 1}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
    
  );
}
