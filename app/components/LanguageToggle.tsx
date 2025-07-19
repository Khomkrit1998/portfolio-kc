"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/LanguageContext"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "th" : "en")}
      className="h-9 px-3 font-medium"
    >
      {language === "en" ? "ไทย" : "ENG"}
    </Button>
  )
}
