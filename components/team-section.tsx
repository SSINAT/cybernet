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
         " 10+ years of experience in cybersecurity. Expertise in penetration testing, security architecture, and incident response",
       avatar: "/kuy-movsun.png",
       linkedin: "https://www.linkedin.com/in/reatrey-pich-760621a5/",
     },
     {
       name: "Pich Reatrey",
       role: "Director of Security Operations",
       description:
         "10+ years of experience in security operations and team leadership. Strong expertise in threat intelligence and security program management",
       avatar: "/pichreatrey.png",
       linkedin: "https://www.linkedin.com/in/reatrey-pich-760621a5/",
     },
     {
       name: "Ang Ausa",
       role: "Senior Penetration Tester",
       description:
         "3+ years of experience in ethical hacking and vulnerability assessment. Certified OSCP and holds multiple security certifications",
       avatar: "/ausa.png",
       linkedin: "https://www.linkedin.com/in/reatrey-pich-760621a5/",
     },
     {
       name: "Sina Sinat ",
       role: "Threat Intelligence Analyst",
       description:
         "2+ years of experience in threat intelligence and cyber threat analysis. Expert in identifying emerging threats and attack patterns",
       avatar: "/sinat.png",
       linkedin: "https://www.linkedin.com/in/sinat-sina-36765b238/",
     },
     {
       name: "Yous Yeata",
       role: "Security Compliance Specialist",
       description:
         "2+ years of experience in security compliance and risk management. Expert in ISO 27001, SOC 2, and GDPR compliance frameworks",
       avatar: "/yata1.png",
       linkedin: "https://www.linkedin.com/in/yeata-yous-a284b7319/",
     },
     {
       name: "Nite Sothey",
       role: "Security Analyst",
       description:
         "2+ years of experience in security monitoring and vulnerability management. Skilled in SIEM tools and security automation",
       avatar: "/sothey1.png",
       linkedin: "https://www.linkedin.com/in/nith-sothey-9642a3368/",
     },
     {
       name: "Roem Vanne",
       role: "Network Security Engineer",
       description:
         "2+ years of experience in network security and firewall management. Expert in designing secure network architectures",
       avatar: "/vanne.png",
       linkedin: "https://www.linkedin.com/in/vanne-roem-0142b0368/",
     },
     {
       name: "Ret Sreymony",
       role: "Application Security Specialist",
       description:
         "2+ years of experience in application security testing. Specialized in secure code review and OWASP Top 10 vulnerabilities",
       avatar: "/mony.png",
       linkedin: "https://www.linkedin.com/in/reatrey-pich-760621a5/",
     },
     {
       name: "Jeffrey Visa",
       role: "Cryptography Expert",
       description:
         "2+ years of experience in cryptography and data protection. Expert in encryption protocols and secure communication systems",
       avatar: "/Jeffrey.png",
       linkedin: "https://www.linkedin.com/in/reatrey-pich-760621a5/",
     },
     {
       name: "Soeung Pheareakpanhaboth",
       role: "Application Security Specialist",
       description:
         "2+ years of experience in application security testing. Specialized in secure code review and OWASP Top 10 vulnerabilities",
       avatar: "/both.jpg",
       linkedin: "https://www.linkedin.com/in/reatrey-pich-760621a5/",
     },
     {
       name: "Sros Thavarith",
       role: "Cryptography Expert",
       description:
         "2+ years of experience in cryptography and data protection. Expert in encryption protocols and secure communication systems",
       avatar: "/thavarith.png",
       linkedin: "https://www.linkedin.com/in/thavrith-sroas-2ab64b1ab/",
     },
     {
       name: "Chan Nimol",
       role: "Application Security Specialist",
       description:
         "2+ years of experience in application security testing. Specialized in secure code review and OWASP Top 10 vulnerabilities",
       avatar: "/nimol1.png",
       linkedin: "https://www.linkedin.com/in/reatrey-pich-760621a5/",
     },
     {
       name: "Chhay Ingchhy",
       role: "Application Security Specialist",
       description:
         "2+ years of experience in application security testing. Specialized in secure code review and OWASP Top 10 vulnerabilities",
       avatar: "/ingchhy.png",
       linkedin: "https://www.linkedin.com/in/reatrey-pich-760621a5/",
     },
     {
       name: "Sok Masterly",
       role: "Full Stack Developer",
       description:
         "2+ years of experience in web Developer and Mobile Developer . Expert in encryption token and secure communication systems",
       avatar: "/masterly.jpg",
       linkedin: "https://www.linkedin.com/in/reatrey-pich-760621a5/",
     },
     {
       name: "Tann Kangson",
       role: "Application Security Specialist",
       description:
         "2+ years of experience in application security testing. Specialized in secure code review and OWASP Top 10 vulnerabilities",
       avatar: "/professional-avatar-male.jpg",
       linkedin: "https://www.linkedin.com/in/reatrey-pich-760621a5/",
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
                <div className="w-20 h-20 border-1 border-black rounded-full bg-[#BFFF0A] overflow-hidden">
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
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
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
