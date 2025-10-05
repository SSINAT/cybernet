import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "Deployment of a Honeypot and Thread Intelligence Platform",
      bg: "bg-[#BFFF0A]",
      textColor: "text-black",
      image: "/honeypotv1.png",
    },
    {
      title:
        "Implementation of a Network Monitoring and Alerting System using Open-Source Tools",
      bg: "bg-[#BFFF0A]",
      textColor: "text-black",
      image: "/monitoring.png",
    },
    {
      title: "Building a Secure VPN Gateway for Remote Lab Access",
      bg: "bg-black",
      textColor: "text-white",
      image: "/vpn2.png",
    },
    {
      title: "Automated Network Configuration Backup and Compliance Auditing",
      bg: "bg-gray-100",
      textColor: "text-black",
      image: "/network.png",
    },
    {
      title: "QUIC/HTTP 3",
      bg: "bg-[#BFFF0A]",
      textColor: "text-black",
      image: "/quic.png",
    },
    {
      title:
        "Analytics and TrackingDNS Tunneling Systemand automated Process Construction ",
      bg: "bg-black",
      textColor: "text-white",
      image: "/dns.png",
    },
  ];

  return (
    <section id="services" className="container mx-auto px-14 py-16">
      <div className="mb-12">
        <h2 className="inline-block bg-[#BFFF0A] px-4 py-2 rounded-lg font-bold text-3xl mb-4">
          Services
        </h2>
        <p className="text-gray-600 max-w-xl">
          At our cybersecurity firm, we offer a comprehensive range of services
          to help businesses protect their digital assets and maintain robust
          security posture. These services include:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bg} ${service.textColor} rounded-3xl p-8 relative overflow-hidden border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group hover:scale-[1.02] transition-transform`}
          >
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold max-w-[70%]">
                {service.title}
              </h3>
              <div className="absolute top-8 right-8 w-52 h-32">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <Link
              href="#"
              className={`inline-flex items-center gap-2 ${
                service.bg === "bg-black" ? "text-white" : "text-black"
              } group-hover:gap-4 transition-all`}
            >
              <div
                className={`w-10 h-10 rounded-full ${
                  service.bg === "bg-black" ? "bg-white" : "bg-black"
                } flex items-center justify-center`}
              >
                <ArrowRight
                  className={`w-5 h-5 ${
                    service.bg === "bg-black" ? "text-black" : "text-white"
                  }`}
                />
              </div>
              <span className="font-medium">Learn more</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
