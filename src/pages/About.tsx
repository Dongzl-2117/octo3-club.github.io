import { Target, Users, Calendar, BookOpen, Lightbulb, Heart, Rocket, Info } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50/30 to-gray-50">
      <Header />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
              <Info className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">About Us</h2>
          </div>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Learn about our mission, vision, and team culture
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
              <Target className="text-white" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              Octo3 Club is a collaborative learning platform designed specifically for Computer Science students to foster knowledge sharing and academic growth.
              We believe in the power of peer learning and collective intelligence.
            </p>
            <p>
              Through weekly presentations, curated learning resources, and vibrant community events, we strive to create an environment 
              where students can explore new ideas, share research findings, and develop both technical expertise and presentation skills.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <Lightbulb className="text-white" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">What We Do</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Calendar,
                title: "Weekly Presentations",
                description: "Members present on various CS topics, research projects, or interesting technologies",
                color: "from-blue-500 to-indigo-600",
              },
              {
                icon: BookOpen,
                title: "Resource Sharing",
                description: "Curate and share valuable learning materials, papers, and online courses",
                color: "from-green-500 to-teal-600",
              },
              {
                icon: Users,
                title: "Community Events",
                description: "Organize workshops, hackathons, and social gatherings",
                color: "from-purple-500 to-pink-600",
              },
              {
                icon: Heart,
                title: "Peer Learning",
                description: "Foster a supportive environment for asking questions and collaborative problem-solving",
                color: "from-orange-500 to-red-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <Rocket className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white">Join Us</h3>
            </div>
            
            <div className="space-y-4 text-white/95 leading-relaxed text-lg">
              <p>
                We welcome all Computer Science students who are passionate about learning and sharing knowledge. 
                Whether you're interested in algorithms, machine learning, web development, or any other CS topic, 
                there's a place for you in our community.
              </p>
              <p>
                For more information about joining the group or presenting at our sessions, please contact the group administrators.
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer">
              <Users size={20} />
              <span>Join Us Now</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

