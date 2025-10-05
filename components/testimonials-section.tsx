"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: "We have been working with Cybernet Lab for the past two years and have seen a dramatic improvement in our security posture. The team identified critical vulnerabilities we didn't know existed and helped us achieve compliance. Their proactive approach to threat monitoring has given us peace of mind.",
      author: "John Smith",
      position: "CTO at Financial Services Corp",
    },
    {
      text: "The cybersecurity expertise provided by this team has been invaluable. Their penetration testing uncovered vulnerabilities that could have led to a major breach. The incident response training they provided has made our entire organization more security-aware.",
      author: "Sarah Johnson",
      position: "CISO at Healthcare Systems Inc",
    },
    {
      text: "Outstanding security services! The team's dedication to understanding our infrastructure and delivering comprehensive protection has been exceptional. Since partnering with them, we've successfully defended against multiple sophisticated attacks.",
      author: "Michael Chen",
      position: "VP of IT at E-commerce Platform",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className="inline-block bg-[#BFFF0A] px-4 py-2 rounded-lg font-bold text-3xl mb-4">
          Testimonials
        </h2>
        <p className="text-gray-600 max-w-xl">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Cybersecurity Services
        </p>
      </div>

      <div className="bg-black rounded-3xl p-8 md:p-12 relative">
        <div className="max-w-3xl">
          <div className="mb-8">
            <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
              "{testimonials[currentIndex].text}"
            </p>
            <div>
              <p className="text-[#BFFF0A] font-bold text-lg">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-gray-400">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#BFFF0A]" : "bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
