import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Github, Linkedin, Send, Mail, MessageCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200, "Subject is too long"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Telegram",
    href: "https://telegram.org",
    icon: MessageCircle,
  },
  {
    name: "Email",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validateField = (field: keyof ContactFormData, value: string) => {
    try {
      contactSchema.shape[field].parse(value);
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [field]: error.errors[0].message }));
      }
      return false;
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      validateField(field, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual backend call when connected)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <PageLayout>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <Card className="md:col-span-2 shadow-soft border-0 bg-card/80 backdrop-blur-sm animate-slide-up">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={(e) => validateField("name", e.target.value)}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={(e) => validateField("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    onBlur={(e) => validateField("subject", e.target.value)}
                    className={errors.subject ? "border-destructive" : ""}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={(e) => validateField("message", e.target.value)}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="animate-slide-up delay-100">
            <Card className="shadow-soft border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors group"
                    >
                      <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="font-medium text-sm group-hover:text-primary transition-colors">
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="mt-6 shadow-soft border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I typically respond within 24-48 hours. For urgent inquiries, 
                  feel free to reach out via LinkedIn or Telegram.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
