"use client";

import { Linkedin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function TeamSection() {
  const [showAll, setShowAll] = useState(false);

  const team = [
    {
      name: "Kuy Movsun",
      role: "CEO and Founder",
      description:
        " 15+ years of experience in cybersecurity. Expertise in penetration testing, security architecture, and incident response",
      avatar: "/professional-avatar-male.jpg",
    },
    {
      name: "Pich Reatrey",
      role: "Director of Security Operations",
      description:
        "10+ years of experience in security operations and team leadership. Strong expertise in threat intelligence and security program management",
      avatar: "/professional-avatar-female.jpg",
    },
    {
      name: "Ang Ausa ",
      role: "Senior Penetration Tester",
      description:
        "3+ years of experience in ethical hacking and vulnerability assessment. Certified OSCP and holds multiple security certifications",
      avatar: "/professional-avatar-male-2.jpg",
    },
    {
      name: "Sina Sinat ",
      role: "Threat Intelligence Analyst",
      description:
        "4+ years of experience in threat intelligence and cyber threat analysis. Expert in identifying emerging threats and attack patterns",
      avatar: "/professional-avatar-male-3.jpg",
    },
    {
      name: "Yous Yata",
      role: "Security Compliance Specialist",
      description:
        "2+ years of experience in security compliance and risk management. Expert in ISO 27001, SOC 2, and GDPR compliance frameworks",
      avatar: "/professional-avatar-female-2.jpg",
    },
    {
      name: "Nite Sothey",
      role: "Security Analyst",
      description:
        "3+ years of experience in security monitoring and vulnerability management. Skilled in SIEM tools and security automation",
      avatar: "/professional-avatar-female-3.jpg",
    },

    {
      name: "Sina Sinat",
      role: "Threat Intelligence Analyst",
      description:
        "4+ years of experience in threat intelligence and cyber threat analysis. Expert in identifying emerging threats and attack patterns",
      avatar: "/professional-avatar-female-2.jpg",
    },
    {
      name: "Yous Yata",
      role: "Cloud Security Architect",
      description:
        "6+ years of experience in cloud security and infrastructure protection. Specialized in AWS, Azure, and GCP security implementations",
      avatar: "/professional-avatar-male-3.jpg",
    },
    {
      name: "Nite Sothey",
      role: "Security Analyst",
      description:
        "3+ years of experience in security monitoring and vulnerability management. Skilled in SIEM tools and security automation",
      avatar: "/professional-avatar-female-3.jpg",
    },
    {
      name: "Roem Vanne",
      role: "Network Security Engineer",
      description:
        "2+ years of experience in network security and firewall management. Expert in designing secure network architectures",
      avatar: "/professional-avatar-male.jpg",
    },
    {
      name: "Lisa Martinez",
      role: "Application Security Specialist",
      description:
        "5+ years of experience in application security testing. Specialized in secure code review and OWASP Top 10 vulnerabilities",
      avatar: "/professional-avatar-female.jpg",
    },
    {
      name: "Robert Taylor",
      role: "Cryptography Expert",
      description:
        "12+ years of experience in cryptography and data protection. Expert in encryption protocols and secure communication systems",
      avatar: "/professional-avatar-male-2.jpg",
    },
  ];

  const displayedTeam = showAll ? team : team.slice(0, 6);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className="inline-block bg-[#BFFF0A] px-4 py-2 rounded-lg font-bold text-3xl mb-4">
          Team
        </h2>
        <p className="text-gray-600 max-w-xl">
          Meet the skilled and experienced team behind our successful
          cybersecurity solutions and threat protection strategies
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {displayedTeam.map((member, index) => (
          <div
            key={index}
            className="border-2 border-black rounded-3xl p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-[#BFFF0A] overflow-hidden">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>

            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-sm font-medium mb-3">{member.role}</p>
            <p className="text-gray-600 leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          {showAll ? "Show less" : "See all team"}
        </button>
      </div>
    </section>
  );
}
