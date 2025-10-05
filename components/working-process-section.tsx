"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export function WorkingProcessSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const processes = [
    {
      number: "01",
      title: "Security Assessment",
      description:
        "During the initial assessment, we will evaluate your current security posture, identify vulnerabilities, and understand your compliance requirements. This allows us to develop a tailored security strategy that addresses your specific risks and business needs.",
    },
    {
      number: "02",
      title: "Threat Analysis and Planning",
      description:
        "We conduct thorough threat modeling and risk analysis to identify potential attack vectors. Our team develops a comprehensive security roadmap with prioritized recommendations based on risk severity and business impact.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Our security experts deploy protective measures, configure security tools, and implement best practices across your infrastructure to strengthen your defense against cyber threats.",
    },
    {
      number: "04",
      title: "Monitoring and Response",
      description:
        "We provide continuous security monitoring, threat detection, and rapid incident response to identify and neutralize threats before they can cause damage to your organization.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      description:
        "Regular security reports keep you informed of threats, vulnerabilities, and remediation progress, with clear communication and actionable insights throughout the engagement.",
    },
    {
      number: "06",
      title: "Continuous Improvement",
      description:
        "We regularly review and update security measures to adapt to evolving threats, ensuring your organization maintains a strong security posture against emerging cyber risks.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className="inline-block bg-[#BFFF0A] px-4 py-2 rounded-lg font-bold text-3xl mb-4">
          Our Working Process
        </h2>
        <p className="text-gray-600 max-w-xl">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="space-y-4">
        {processes.map((process, index) => (
          <div
            key={index}
            className={`border-[3px] border-black rounded-3xl overflow-hidden transition-all shadow-[0px_3px_0px_0px_rgba(0,0,0,1)] ${
              openIndex === index ? "bg-[#BFFF0A]" : "bg-white"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold">{process.number}</span>
                <span className="text-xl font-bold">{process.title}</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center flex-shrink-0">
                {openIndex === index ? (
                  <Minus className="w-6 h-6" />
                ) : (
                  <Plus className="w-6 h-6" />
                )}
              </div>
            </button>

            {openIndex === index && (
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div className="border-t-2 border-black pt-6">
                  <p className="text-lg leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
