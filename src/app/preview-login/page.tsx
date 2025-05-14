'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function PreviewLoginContent() {
  const [password, setPassword] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/preview-login?password=${encodeURIComponent(password)}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Preview Access
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter the preview password to continue
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Preview password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error === 'invalid' && (
            <div className="text-red-500 text-sm text-center">
              Invalid password. Please try again.
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Access Preview
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function PreviewLogin() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mt-4"></div>
            <div className="h-10 bg-gray-200 rounded w-full mt-8"></div>
          </div>
        </div>
      </div>
    }>
      <PreviewLoginContent />
    </Suspense>
  )
} 