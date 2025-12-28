import { useState } from "react";
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin, Send } from "lucide-react";
import { schoolInfo } from "@/data/sampleContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Footer = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("message", formData.message);

      payload.append("access_key", "5ee1ee02-47b4-4243-ae1d-a7f3c1337e40");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent",
          description: "We received your message. We'll get back to you soon.",
        });

        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Failed",
          description: "Something went wrong. Try again later.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Network Error",
        description: "Unable to send message. Check your internet connection.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Facebook, url: schoolInfo.socials.facebook, label: "Facebook" },
    { icon: Instagram, url: schoolInfo.socials.instagram, label: "Instagram" },
    { icon: Youtube, url: schoolInfo.socials.youtube, label: "YouTube" },
    { icon: Twitter, url: schoolInfo.socials.twitter, label: "Twitter" },
  ];

  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background/10 border-border/20 text-footer-text placeholder:text-footer-text/50"
                required
              />

              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background/10 border-border/20 text-footer-text placeholder:text-footer-text/50"
                required
              />

              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background/10 border-border/20 text-footer-text placeholder:text-footer-text/50 min-h-[100px]"
                required
              />

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover"
                disabled={isSubmitting}
              >
                <Send className="h-4 w-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gray-500 mt-1 text-primary" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-footer-text/80">{schoolInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gray-500 mt-1 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-footer-text/80">{schoolInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-500 mt-1 text-primary" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-footer-text/80">{schoolInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Our Location</h3>
            <div className="rounded-lg overflow-hidden h-64 border border-border/20">
              <iframe
                src={schoolInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/20 text-center text-footer-text/60">
          <p>&copy; {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
