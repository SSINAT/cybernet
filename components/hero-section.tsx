

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  const companies = [
    { name: "AMK", logo: "/amk.png" },
    { name: "ABA", logo: "/aba.png" },
    { name: "Wing", logo: "/wing.png" },
    { name: "Codera", logo: "/codera.png" },
    { name: "Cybernet Lab", logo: "/logo.png" },
    { name: "ITC", logo: "/itc.png" },
    { name: "GIC", logo: "/gic.png" },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-balance">
            Protecting your digital assets from evolving threats
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Our cybersecurity firm helps businesses defend against cyber threats
            and secure their digital infrastructure through comprehensive
            security solutions. From penetration testing to incident response,
            we're here to protect your organization.
          </p>
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white rounded-full px-8"
          >
            Book a consultation
          </Button>
        </div>

        <div className="relative">
          <div className="relative w-full aspect-square">
            <Image
              src="/hero.png"
              alt="Digital Marketing Illustration"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200 overflow-hidden">
        <div className="relative flex whitespace-nowrap">
          <div className="flex items-center gap-12 md:gap-16 opacity-160 animate-scroll">
            {companies.map((company, index) => (
              <div
                key={`${company.name}-1-${index}`}
                className="flex-shrink-0 min-w-[120px] flex justify-center"
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={120}
                  height={72}
                  className="h-18 w-auto  object-contain"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div
            className="flex items-center gap-12 md:gap-16 opacity-160 animate-scroll"
            aria-hidden="true"
          >
            {companies.map((company, index) => (
              <div
                key={`${company.name}-2-${index}`}
                className="flex-shrink-0 min-w-[120px] flex justify-center"
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={120}
                  height={72}
                  className="h-18 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

  