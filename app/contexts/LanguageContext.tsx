"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "th"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Translation data
const translations = {
  en: {
    // Hero Section
    "hero.title": "John Developer",
    "hero.subtitle": "Full-Stack Developer crafting exceptional web experiences with modern technologies",
    "hero.viewWork": "View My Work",
    "hero.manageProjects": "Manage Projects",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle": "A collection of web applications I've built using modern technologies and best practices",
    "projects.noProjects": "No projects yet. Add some from the admin panel!",
    "projects.liveDemo": "Live Demo",
    "projects.code": "Code",

    // Team Section
    "team.title": "Meet Our Team",
    "team.subtitle": "Talented professionals working together to deliver exceptional results",

    // Footer
    "footer.connect": "Let's Connect",
    "footer.tagline": "Ready to bring your ideas to life",
    "footer.rights": "All rights reserved.",

    // Admin
    "admin.login": "Admin Login",
    "admin.loginDesc": "Access the project management dashboard",
    "admin.email": "Email",
    "admin.password": "Password",
    "admin.signIn": "Sign In",
    "admin.signingIn": "Signing in...",
    "admin.demoCredentials": "Demo Credentials:",
    "admin.invalidCredentials": "Invalid email or password",
    "admin.loginError": "An error occurred during login",
    "admin.projectManagement": "Project Management",
    "admin.backToPortfolio": "Back to Portfolio",
    "admin.signOut": "Sign Out",
    "admin.myAccount": "My Account",
    "admin.yourProjects": "Your Projects",
    "admin.manageProjects": "Manage your portfolio projects",
    "admin.addProject": "Add Project",
    "admin.addFirstProject": "Add Your First Project",
    "admin.editProject": "Edit Project",
    "admin.updateProject": "Update Project",
    "admin.addNewProject": "Add New Project",
    "admin.updateProjectDesc": "Update your project details",
    "admin.addProjectDesc": "Add a new project to your portfolio",
    "admin.projectTitle": "Project Title",
    "admin.description": "Description",
    "admin.technologies": "Technologies (comma-separated)",
    "admin.liveUrl": "Live URL (optional)",
    "admin.githubUrl": "GitHub URL (optional)",
    "admin.imageUrl": "Image URL (optional)",
    "admin.saving": "Saving...",
    "admin.updateProject": "Update Project",
    "admin.cancel": "Cancel",
    "admin.deleteConfirm": "Are you sure you want to delete this project?",

    // Team Members
    "team.sarah.name": "Sarah Johnson",
    "team.sarah.role": "Senior Frontend Developer",
    "team.sarah.bio":
      "Passionate about creating beautiful and intuitive user interfaces with React and modern web technologies.",

    "team.alex.name": "Alex Chen",
    "team.alex.role": "UI/UX Designer & Frontend Developer",
    "team.alex.bio":
      "Bridging the gap between design and development with a focus on user experience and accessibility.",

    "team.michael.name": "Michael Rodriguez",
    "team.michael.role": "Lead Backend Developer",
    "team.michael.bio":
      "Expert in building scalable server-side applications and designing robust database architectures.",

    "team.emily.name": "Emily Davis",
    "team.emily.role": "DevOps Engineer",
    "team.emily.bio": "Specializing in cloud infrastructure, CI/CD pipelines, and ensuring high availability systems.",

    "team.david.name": "David Kim",
    "team.david.role": "Digital Marketing Manager",
    "team.david.bio": "Driving growth through data-driven marketing strategies and compelling brand storytelling.",

    "team.lisa.name": "Lisa Thompson",
    "team.lisa.role": "Content Marketing Specialist",
    "team.lisa.bio": "Creating engaging content that connects with audiences and drives meaningful engagement.",

    // Categories
    "category.frontend": "Frontend",
    "category.backend": "Backend",
    "category.marketing": "Marketing",
  },
  th: {
    // Hero Section
    "hero.title": "จอห์น ดีเวลอปเปอร์",
    "hero.subtitle": "นักพัฒนาเว็บไซต์แบบเต็มรูปแบบ สร้างประสบการณ์เว็บที่ยอดเยี่ยมด้วยเทคโนโลยีสมัยใหม่",
    "hero.viewWork": "ดูผลงานของฉัน",
    "hero.manageProjects": "จัดการโปรเจค",

    // Projects Section
    "projects.title": "โปรเจคเด่น",
    "projects.subtitle": "คอลเลกชันของเว็บแอปพลิเคชันที่ฉันสร้างขึ้นโดยใช้เทคโนโลยีสมัยใหม่และแนวปฏิบัติที่ดีที่สุด",
    "projects.noProjects": "ยังไม่มีโปรเจค เพิ่มจากแผงควบคุมผู้ดูแลระบบ!",
    "projects.liveDemo": "ดูตัวอย่าง",
    "projects.code": "โค้ด",

    // Team Section
    "team.title": "พบกับทีมของเรา",
    "team.subtitle": "ผู้เชี่ยวชาญที่มีความสามารถทำงานร่วมกันเพื่อส่งมอบผลลัพธ์ที่ยอดเยี่ยม",

    // Footer
    "footer.connect": "มาเชื่อมต่อกัน",
    "footer.tagline": "พร้อมที่จะทำให้ไอเดียของคุณเป็นจริง",
    "footer.rights": "สงวนลิขสิทธิ์",

    // Admin
    "admin.login": "เข้าสู่ระบบผู้ดูแล",
    "admin.loginDesc": "เข้าถึงแดชบอร์ดการจัดการโปรเจค",
    "admin.email": "อีเมล",
    "admin.password": "รหัสผ่าน",
    "admin.signIn": "เข้าสู่ระบบ",
    "admin.signingIn": "กำลังเข้าสู่ระบบ...",
    "admin.demoCredentials": "ข้อมูลสำหรับทดสอบ:",
    "admin.invalidCredentials": "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
    "admin.loginError": "เกิดข้อผิดพลาดในการเข้าสู่ระบบ",
    "admin.projectManagement": "การจัดการโปรเจค",
    "admin.backToPortfolio": "กลับไปยังพอร์ตโฟลิโอ",
    "admin.signOut": "ออกจากระบบ",
    "admin.myAccount": "บัญชีของฉัน",
    "admin.yourProjects": "โปรเจคของคุณ",
    "admin.manageProjects": "จัดการโปรเจคพอร์ตโฟลิโอของคุณ",
    "admin.addProject": "เพิ่มโปรเจค",
    "admin.addFirstProject": "เพิ่มโปรเจคแรกของคุณ",
    "admin.editProject": "แก้ไขโปรเจค",
    "admin.updateProject": "อัปเดตโปรเจค",
    "admin.addNewProject": "เพิ่มโปรเจคใหม่",
    "admin.updateProjectDesc": "อัปเดตรายละเอียดโปรเจคของคุณ",
    "admin.addProjectDesc": "เพิ่มโปรเจคใหม่ในพอร์ตโฟลิโอของคุณ",
    "admin.projectTitle": "ชื่อโปรเจค",
    "admin.description": "คำอธิบาย",
    "admin.technologies": "เทคโนโลยี (คั่นด้วยจุลภาค)",
    "admin.liveUrl": "URL สด (ไม่บังคับ)",
    "admin.githubUrl": "GitHub URL (ไม่บังคับ)",
    "admin.imageUrl": "URL รูปภาพ (ไม่บังคับ)",
    "admin.saving": "กำลังบันทึก...",
    "admin.updateProject": "อัปเดตโปรเจค",
    "admin.cancel": "ยกเลิก",
    "admin.deleteConfirm": "คุณแน่ใจหรือไม่ว่าต้องการลบโปรเจคนี้?",

    // Team Members
    "team.sarah.name": "ซาราห์ จอห์นสัน",
    "team.sarah.role": "นักพัฒนาฟรอนต์เอนด์อาวุโส",
    "team.sarah.bio": "หลงใหลในการสร้างส่วนติดต่อผู้ใช้ที่สวยงามและใช้งานง่ายด้วย React และเทคโนโลยีเว็บสมัยใหม่",

    "team.alex.name": "อเล็กซ์ เฉิน",
    "team.alex.role": "นักออกแบบ UI/UX และนักพัฒนาฟรอนต์เอนด์",
    "team.alex.bio": "เชื่อมช่องว่างระหว่างการออกแบบและการพัฒนาโดยเน้นประสบการณ์ผู้ใช้และการเข้าถึง",

    "team.michael.name": "ไมเคิล โรดริเกซ",
    "team.michael.role": "หัวหน้านักพัฒนาแบ็กเอนด์",
    "team.michael.bio": "ผู้เชี่ยวชาญในการสร้างแอปพลิเคชันฝั่งเซิร์ฟเวอร์ที่ขยายได้และออกแบบสถาปัตยกรรมฐานข้อมูลที่แข็งแกร่ง",

    "team.emily.name": "เอมิลี่ เดวิส",
    "team.emily.role": "วิศวกร DevOps",
    "team.emily.bio": "เชี่ยวชาญด้านโครงสร้างพื้นฐานคลาวด์ ไปป์ไลน์ CI/CD และการรับประกันระบบที่มีความพร้อมใช้งานสูง",

    "team.david.name": "เดวิด คิม",
    "team.david.role": "ผู้จัดการการตลาดดิจิทัล",
    "team.david.bio": "ขับเคลื่อนการเติบโตผ่านกลยุทธ์การตลาดที่ขับเคลื่อนด้วยข้อมูลและการเล่าเรื่องแบรนด์ที่น่าสนใจ",

    "team.lisa.name": "ลิซ่า ทอมป์สัน",
    "team.lisa.role": "ผู้เชี่ยวชาญการตลาดเนื้อหา",
    "team.lisa.bio": "สร้างเนื้อหาที่น่าสนใจที่เชื่อมต่อกับผู้ชมและขับเคลื่อนการมีส่วนร่วมที่มีความหมาย",

    // Categories
    "category.frontend": "ฟรอนต์เอนด์",
    "category.backend": "แบ็กเอนด์",
    "category.marketing": "การตลาด",
  },
}

interface LanguageProviderProps {
  children: React.ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "th")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
