import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CaseStudiesSection() {
  const caseStudies = [
    {
      description:
        "For a financial services company, we conducted a comprehensive security audit that identified 47 vulnerabilities. Our remediation plan resulted in a 95% reduction in security risks within 60 days.",
    },
    {
      description:
        "For a healthcare provider, we implemented 24/7 threat monitoring and incident response services that detected and neutralized 3 major security threats, preventing potential data breaches affecting 100,000+ patient records.",
    },
    {
      description:
        "For an e-commerce platform, we performed penetration testing that uncovered critical payment system vulnerabilities. Our security enhancements protected customer data and achieved PCI DSS compliance.",
    },
  ];

  return (
    <section id="cases" className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className="inline-block bg-[#BFFF0A] px-4 py-2 rounded-lg font-bold text-3xl mb-4">
          Case Studies
        </h2>
        <p className="text-gray-600 max-w-xl">
          Explore Real-Life Examples of Our Proven Cybersecurity Success through
          Our Case Studies
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="bg-black text-white rounded-3xl p-8 hover:bg-gray-900 transition-colors"
          >
            <p className="text-lg mb-6 leading-relaxed">{study.description}</p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-[#BFFF0A] hover:gap-4 transition-all"
            >
              <span className="font-medium">Learn more</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
