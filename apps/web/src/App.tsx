import { Routes, Route } from 'react-router-dom'
import { Button } from '@salonx/ui'
import { createSupabaseClient } from '@salonx/api'

function HomePage() {
  const handleClick = () => {
    createSupabaseClient()
    console.log('SalonX monorepo is working!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary-600 mb-6">
            SalonX
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Complete Salon Management System
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            A modern monorepo with shared packages for web and mobile applications.
            Built with React, TypeScript, Tailwind CSS, and Supabase.
          </p>
          
          <div className="space-y-4">
            <Button onClick={handleClick} size="lg">
              Test Shared Packages
            </Button>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Monorepo Structure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-primary-600 mb-2">Apps</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Web (React + Vite + Tailwind)</li>
                    <li>• Mobile (Expo + React Native)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-600 mb-2">Packages</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• UI (@salonx/ui)</li>
                    <li>• API (@salonx/api)</li>
                    <li>• Types (@salonx/types)</li>
                    <li>• Config (@salonx/config)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App 