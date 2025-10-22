import React from 'react';
import { Users, Briefcase, GraduationCap, Building2, Code } from 'lucide-react';

export default function WhoCan() {
  const users = [
    {
      id: 1,
      title: "Startups",
      icon: <Briefcase className="w-8 h-8" />,
      description: "Scale your customer support as you grow",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Individuals",
      icon: <Users className="w-8 h-8" />,
      description: "Manage personal client relationships efficiently",
      color: "from-blue-600 to-blue-700"
    },
    {
      id: 3,
      title: "Education",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Support students and faculty with ease",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 4,
      title: "Corporate",
      icon: <Building2 className="w-8 h-8" />,
      description: "Enterprise-grade customer service solutions",
      color: "from-blue-600 to-blue-700"
    },
    {
      id: 5,
      title: "Developers",
      icon: <Code className="w-8 h-8" />,
      description: "Build and integrate with powerful APIs",
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl text-slate-800 mb-4">
          Who can use our Services
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A powerful, flexible platform designed to serve diverse needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {users.map((user) => (
            <div
              key={user.id}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${user.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {user.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                {user.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {user.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>

    
    </div>
  )
}