import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top row - Logo + Auth buttons */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 lg:mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-2xl font-bold">📺</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Watchers List
              </h2>
              <p className="text-sm text-gray-400">Your media universe</p>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap justify-center lg:justify-end">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-2xl text-sm shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
              🚀 Sign Up
            </button>
            <button className="bg-gray-800/50 hover:bg-gray-700/70 border border-gray-600 text-white font-semibold py-3 px-8 rounded-2xl text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
              👤 Log In
            </button>
          </div>
        </div>

        {/* Middle row - Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              🌐 Social Media
            </h3>
            <div className="space-y-2">
              <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-orange-500/10">
                📘 Facebook
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-sky-400 transition-colors p-2 rounded-lg hover:bg-sky-500/10">
                🐦 Twitter
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors p-2 rounded-lg hover:bg-pink-500/10">
                📷 Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-500/10">
                💼 LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              💬 Contact Us
            </h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Have questions, suggestions, or feedback? We'd love to hear from you!
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
              <textarea
                rows="2"
                placeholder="Your message..."
                className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
              />
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                Send Message
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              🚀 Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-500/10 block">Home</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-500/10 block">Browse</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-500/10 block">Anime</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-500/10 block">Movies</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-500/10 block">Series</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-500/10 block">About</a>
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright & Credits */}
        <div className="border-t border-white/10 pt-8 text-center space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <p>&copy; 2025 Watchers List. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h4 className="font-semibold text-sm mb-2 text-gray-300 flex items-center gap-2">
              📸 Image Credits & Disclaimer
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Images belong to their respective owners/artists. Used for educational/practice purposes only (non-commercial). No ownership claimed—credit to original creators. Please respect original licenses.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              These images are not created by me and belong to their respective artists/sources. I am using them solely for educational and practice purposes in this Project. No commercial intent or ownership claimed—credit to original creators.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
