"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "../contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">{t("footer.connect")}</h3>
            <p className="text-gray-400 dark:text-gray-300">{t("footer.tagline")}</p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com"
              className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:contact@example.com"
              className="text-gray-400 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} {t("hero.title")}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
