// Simple authentication system for demo purposes
// In production, use NextAuth.js or similar

export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "user"
}

// Demo credentials - in production, use proper authentication
const DEMO_USERS: User[] = [
  {
    id: "1",
    email: "admin@portfolio.com",
    name: "Admin User",
    role: "admin",
  },
]

const DEMO_PASSWORD = "admin123"

export async function authenticate(email: string, password: string): Promise<User | null> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const user = DEMO_USERS.find((u) => u.email === email)
  if (user && password === DEMO_PASSWORD) {
    return user
  }
  return null
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem("auth_user") !== null
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null
  const userStr = localStorage.getItem("auth_user")
  return userStr ? JSON.parse(userStr) : null
}

export function setCurrentUser(user: User): void {
  localStorage.setItem("auth_user", JSON.stringify(user))
}

export function logout(): void {
  localStorage.removeItem("auth_user")
}
