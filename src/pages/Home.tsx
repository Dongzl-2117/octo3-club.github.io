import { Link } from "wouter";
import { Calendar, BookOpen, Image, Sparkles, Users, TrendingUp, ArrowRight } from "lucide-react";
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/30">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Welcome to Knowledge Sharing Community</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Octo3 Club
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto leading-relaxed">
              A Collaborative Learning Platform
            </p>
            <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto">
              Share knowledge, present research, and grow together
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/presentations">
                <button className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                  View Presentations
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/about">
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50">
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
            <path d="M0 120L60 112.5C120 105 240 90 360 82.5C480 75 600 75 720 78.75C840 82.5 960 90 1080 93.75C1200 97.5 1320 97.5 1380 97.5L1440 97.5V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
            <defs>
              <linearGradient id="paint0_linear" x1="720" y1="30" x2="720" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.5"/>
                <stop offset="1" stopColor="white" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Active Members", value: "50+" },
              { icon: Calendar, label: "Presentations", value: "30+" },
              { icon: BookOpen, label: "Resources", value: "100+" },
              { icon: TrendingUp, label: "Growing", value: "2 Years+" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50/50 hover:shadow-lg transition-all duration-300 border border-gray-100">
                <stat.icon className="mx-auto mb-3 text-blue-600" size={32} />
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A carefully crafted learning and sharing platform for Computer Science students
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Weekly Presentations",
                description: "Regular knowledge sharing sessions where members present on various CS topics, research findings, and technical insights",
                color: "from-blue-500 to-indigo-600",
                bg: "bg-blue-50",
              },
              {
                icon: BookOpen,
                title: "Curated Resources",
                description: "Carefully selected collection of papers, articles, and learning materials to help you dive deep into various fields",
                color: "from-purple-500 to-pink-600",
                bg: "bg-purple-50",
              },
              {
                icon: Image,
                title: "Event Gallery",
                description: "Capturing memorable moments from our group activities, workshops, and gatherings as we grow together",
                color: "from-green-500 to-teal-600",
                bg: "bg-green-50",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-white" size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Presentations */}
      {upcomingPresentations.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">Upcoming Presentations</h3>
                <p className="text-gray-600">Exciting content you don't want to miss</p>
              </div>
              <Link href="/presentations">
                <a className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
                  View All
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {upcomingPresentations.map((presentation) => (
                <div
                  key={presentation.id}
                  className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-4">
                    <Calendar size={16} />
                    <span>{new Date(presentation.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {presentation.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-2">{presentation.description}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                      {presentation.speaker.charAt(0)}
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{presentation.speaker}</span>
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

