import { Camera, Sparkles, Users, TrendingUp } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            PhotoBuddy
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            AI-powered photo sharing platform for photographers. Share your work, get AI insights, and connect with the photography community.
          </p>
          <div className="space-x-4">
            <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button>
            <button className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Camera className="w-12 h-12 text-slate-600 dark:text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Share Photos</h3>
            <p className="text-slate-600 dark:text-slate-400">Upload and showcase your photography work</p>
          </div>
          <div className="text-center">
            <Sparkles className="w-12 h-12 text-slate-600 dark:text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI Insights</h3>
            <p className="text-slate-600 dark:text-slate-400">Get AI-powered feedback and editing suggestions</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-slate-600 dark:text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <p className="text-slate-600 dark:text-slate-400">Follow photographers and build your network</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-slate-600 dark:text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Sell Prints</h3>
            <p className="text-slate-600 dark:text-slate-400">Monetize your work through our marketplace</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Ready to share your photography?</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Join thousands of photographers sharing their work and getting AI-powered insights to improve their craft.
          </p>
          <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Sign Up Free
          </button>
        </div>
      </div>
    </div>
  )
}
