import { Link } from "wouter";
import { GraduationCap, Github, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-xl">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold">Octo3 Club</h4>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              A collaborative platform dedicated to knowledge sharing and academic growth among Computer Science students at HKU.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/presentations">
                  <a className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all"></span>
                    Presentations
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <a className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all"></span>
                    Resources
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all"></span>
                    Gallery
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all"></span>
                    About
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 leading-relaxed">
              For any questions or suggestions, please contact the group administrators.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Octo3 Club. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500 fill-current" /> by HKU CS Students
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


