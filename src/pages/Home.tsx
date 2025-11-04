import { Link } from "wouter";
import { Calendar, BookOpen, Image, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import presentations from "../data/presentations.json";

export default function Home() {
  const upcomingPresentations = presentations
    .filter((p) => p.status === "upcoming")
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-animated">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <div className="text-center animate-fadeIn">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-glow">
              Octo3 Club
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto leading-relaxed animate-slideUp">
              A Collaborative Learning Platform
            </p>
            <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto animate-slideUp" style={{animationDelay: '0.2s'}}>
              Share knowledge, present research, and grow together
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-scaleIn" style={{animationDelay: '0.4s'}}>
              <Link href="/presentations">
                <button className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold transition-smooth shadow-premium-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 glow-blue">
                  View Presentations
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/about">
                <button className="glass-strong text-white px-8 py-4 rounded-xl font-semibold transition-smooth hover:scale-105">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#paint0_linear)" fillOpacity="0.3"/>
            <path d="M0 120L60 112.5C120 105 240 90 360 82.5C480 75 600 75 720 78.75C840 82.5 960 90 1080 93.75C1200 97.5 1320 97.5 1380 97.5L1440 97.5V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            <defs>
              <linearGradient id="paint0_linear" x1="720" y1="30" x2="720" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.5"/>
                <stop offset="1" stopColor="white" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeIn">
            <h3 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text-blue">What We Offer</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A carefully crafted learning and sharing platform for Computer Science students
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Calendar,
                title: "Weekly Presentations",
                description: "Regular knowledge sharing sessions where members present on various CS topics, research findings, and technical insights",
                color: "from-blue-500 to-indigo-600",
                delay: "0s"
              },
              {
                icon: BookOpen,
                title: "Curated Resources",
                description: "Carefully selected collection of papers, articles, and learning materials to help you dive deep into various fields",
                color: "from-purple-500 to-pink-600",
                delay: "0.2s"
              },
              {
                icon: Image,
                title: "Event Gallery",
                description: "Capturing memorable moments from our group activities, workshops, and gatherings as we grow together",
                color: "from-green-500 to-teal-600",
                delay: "0.4s"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card-premium animate-slideUp"
                style={{animationDelay: item.delay}}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 from-blue-500 to-purple-600"></div>
                <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${item.color} mb-6 shadow-premium animate-float`}>
                  <item.icon className="text-white" size={36} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Presentations */}
      {upcomingPresentations.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-4 animate-slideInLeft">
              <div>
                <h3 className="text-4xl sm:text-5xl font-bold mb-3">
                  <span className="gradient-text-blue">Upcoming Presentations</span>
                </h3>
                <p className="text-xl text-gray-600">Exciting content you don't want to miss</p>
              </div>
              <Link href="/presentations">
                <a className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg cursor-pointer transition-bounce">
                  View All
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {upcomingPresentations.map((presentation, index) => (
                <div
                  key={presentation.id}
                  className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-premium hover:shadow-premium-lg transition-smooth hover:-translate-y-2 animate-scaleIn"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold mb-5 glass px-4 py-2 rounded-full w-fit">
                      <Calendar size={16} />
                      <span>{new Date(presentation.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {presentation.title}
                    </h4>
                    <p className="text-gray-600 mb-6 line-clamp-3 text-base leading-relaxed">{presentation.description}</p>
                    <div className="flex items-center gap-3 pt-5 border-t border-gray-200">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-base font-bold shadow-premium">
                        {presentation.speaker.charAt(0)}
                      </div>
                      <span className="text-base text-gray-700 font-semibold">{presentation.speaker}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

