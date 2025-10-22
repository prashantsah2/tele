import { MessageCircle, Send, Globe, LucideIcon } from 'lucide-react'
import { useState } from 'react'
import Form from '../Form/Form'

// Editable JSON Configuration

const iconMap= {
  MessageCircle,
  Send,
  Globe
}

export default function ServiceCard({defaultConfig}) {
  const [config] = useState(defaultConfig)
  
  const HeroIcon = iconMap[config.hero.icon] || MessageCircle
  const TopCardIcon = iconMap[config.cards.topCard.icon] || Send

  return (
    <div className={`w-full bg-gradient-to-br ${config.theme.background} flex items-center justify-center p-8 max-sm:px-2`}>
      <div className={`max-w-[1391px] w-full bg-gradient-to-br ${config.theme.gradient} rounded-3xl shadow-2xl overflow-hidden relative`}>
        
        {/* Decorative circles */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-12 lg:p-16">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            
            {/* Icon */}
            <div className={`w-14 h-14 ${config.hero.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
              <HeroIcon className={`w-6 h-6 ${config.hero.iconColor}`} strokeWidth={2} />
            </div>
            
            {/* Heading */}
            <h1 className={`text-4xl ${config.hero.titleColor}`}>
              {config.hero.title}
            </h1>
            
            {/* Description */}
            <p className={`text-base ${config.hero.descriptionColor} leading-relaxed max-w-lg`}>
              {config.hero.description}
            </p>
            
            {/* CTA Button */}
            <div>
              <Form/>
            </div>
          </div>
          
          {/* Right Content - Dashboard Mockups */}
          <div className="relative flex items-center justify-center">
            
            {/* Top Card - SMS Signature */}
            <div className="absolute top-0 right-0 bg-white rounded-xl shadow-lg p-3 w-64 z-20">
              <div className="flex items-center gap-2 mb-2">
                <TopCardIcon className={`w-4 h-4 ${config.cards.topCard.iconColor}`} />
                <span className="text-xs font-medium text-gray-700">{config.cards.topCard.title}</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                <div className="text-xs text-gray-800 font-medium mb-1">{config.cards.topCard.content.heading}</div>
                <div className="text-xs text-yellow-600 space-y-0.5">
                  {config.cards.topCard.content.items.map((item, idx) => (
                    <div key={idx}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main Center Card - SMS Dashboard */}
            <div className="bg-white rounded-xl shadow-xl p-5 w-80 z-10 mt-20">
              <div className="border-b pb-3 mb-3">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-800">{config.cards.mainCard.title}</h3>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-gray-600">to</span>
                    <Globe className="w-3 h-3 text-gray-600" />
                    <span className="font-medium text-gray-800">{config.cards.mainCard.subtitle}</span>
                  </div>
                </div>
                
                {/* Toggle */}
                <div className="flex gap-3">
                  {config.cards.mainCard.tabs.map((tab, idx) => (
                    <button 
                      key={idx}
                      className={`px-3 py-1.5 ${tab.active ? 'bg-gray-800 text-white' : 'text-gray-600'} rounded-full text-xs font-medium flex items-center gap-2`}
                    >
                      {tab.name}
                      {tab.active && (
                        <div className="w-8 h-4 bg-white rounded-full relative">
                          <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-gray-800 rounded-full"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Form Fields */}
              <div className="space-y-3">
                {config.cards.mainCard.fields.map((field, idx) => (
                  <div key={idx}>
                    <label className="text-xs font-medium text-gray-700 mb-1 block">{field.label}</label>
                    {field.type === 'select' ? (
                      <select className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs">
                        <option>{field.placeholder}</option>
                      </select>
                    ) : (
                      <textarea 
                        className="w-full border border-gray-300 rounded-lg px-2 py-1.5 text-xs text-gray-500 h-16 resize-none"
                        placeholder={field.placeholder}
                      ></textarea>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
     
    </div>
  )
}