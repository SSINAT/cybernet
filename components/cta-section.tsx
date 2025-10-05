import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-gray-100 rounded-3xl p-12 md:p-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Let's secure your business
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Contact us today to learn more about how our cybersecurity
              services can help protect your business from evolving threats and
              secure your digital infrastructure.
            </p>
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white rounded-full px-8"
            >
              Get your free security assessment
            </Button>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/happylife.png"
                alt="CTA Illustration"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
