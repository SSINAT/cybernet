import Link from "next/link"
import { Facebook, Linkedin, Twitter } from "lucide-react"
import Image from "next/image";
export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
           <Link href="/" className="flex items-center">
            <Image src="/cybertex.png" alt="CyberTex" width={200} height={60} className="h-12 w-auto" />
          </Link>
            <p className="text-gray-400 text-sm">
              Navigating the digital landscape for success
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  PPC Advertising
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Email Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61581828326782&sk=about"
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 Cybernat Labs. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
