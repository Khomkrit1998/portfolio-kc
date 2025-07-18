"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { isAuthenticated } from "../lib/auth"
import LoginForm from "./LoginForm"

interface AuthGuardProps {
  children: React.ReactNode
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    setAuthenticated(isAuthenticated())
  }, [])

  if (authenticated === null) {
    // Loading state
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!authenticated) {
    return <LoginForm onSuccess={() => setAuthenticated(true)} />
  }

  return <>{children}</>
}
