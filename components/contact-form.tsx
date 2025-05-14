"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Mail, User, MessageSquare } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

export function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
    setFormSubmitted(true)

    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)

    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formData)
  }

  if (!mounted) {
    return <div className="space-y-6"></div>
  }

  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary/10 hidden md:block"></div>
      <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-primary/10 hidden md:block"></div>

      <div className="bg-background border border-border rounded-xl p-8 shadow-lg relative z-10">
        {formSubmitted ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Send className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">{t("contact.form.successTitle")}</h3>
            <p className="text-muted-foreground">{t("contact.form.successMessage")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                {t("contact.form.name")}
              </Label>
              <Input
                id="name"
                name="name"
                placeholder={t("contact.form.namePlaceholder")}
                value={formData.name}
                onChange={handleChange}
                className="bg-muted/50"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                {t("contact.form.email")}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t("contact.form.emailPlaceholder")}
                value={formData.email}
                onChange={handleChange}
                className="bg-muted/50"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                {t("contact.form.subject")}
              </Label>
              <Input
                id="subject"
                name="subject"
                placeholder={t("contact.form.subjectPlaceholder")}
                value={formData.subject}
                onChange={handleChange}
                className="bg-muted/50"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t("contact.form.message")}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t("contact.form.messagePlaceholder")}
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="bg-muted/50 resize-none"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full transition-all",
                isSubmitting ? "bg-primary/80" : "bg-primary hover:bg-primary/90 hover:scale-[1.01]",
              )}
            >
              {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
