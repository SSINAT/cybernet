import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logocybertex.png" alt="CyberTex" width={200} height={60} className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm hover:text-gray-600 transition-colors">
              About us
            </Link>
            <Link href="#services" className="text-sm hover:text-gray-600 transition-colors">
              Services
            </Link>
            <Link href="#cases" className="text-sm hover:text-gray-600 transition-colors">
              Use Cases
            </Link>
            <Link href="#pricing" className="text-sm hover:text-gray-600 transition-colors">
              Pricing
            </Link>
            <Link href="#blog" className="text-sm hover:text-gray-600 transition-colors">
              Blog
            </Link>
            <Button variant="outline" size="sm" className="rounded-full bg-transparent">
              Request a quote
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
