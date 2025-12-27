import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { schoolInfo } from "@/data/sampleContent";

export const Contact = () => {

  const phoneDigits = schoolInfo.phone.replace(/[^0-9]/g, "");
  const whatsappMessage = encodeURIComponent(
    "Hello Sunbird Education Centre School, I would like to enquire about admissions. Please assist me."
  );

  const whatsappLink = `https://wa.me/${phoneDigits}?text=${whatsappMessage}`;

  const contactDetails = [
    { icon: Phone, label: "Phone", value: schoolInfo.phone, href: `tel:${schoolInfo.phone}` },
    { icon: Mail, label: "Email", value: schoolInfo.email, href: `mailto:${schoolInfo.email}` },
    { icon: SiWhatsapp, label: "WhatsApp", value: schoolInfo.phone, href: whatsappLink },
    { icon: MapPin, label: "Address", value: schoolInfo.address, href: null },
    { icon: Clock, label: "Office Hours", value: "Mon - Fri: 8:00 AM - 4:00 PM", href: null },
  ];

  const socialLinks = [
    { icon: Facebook, url: schoolInfo.socials.facebook, label: "Facebook", color: "hover:text-blue-600" },
    { icon: Instagram, url: schoolInfo.socials.instagram, label: "Instagram", color: "hover:text-pink-600" },
    { icon: Youtube, url: schoolInfo.socials.youtube, label: "YouTube", color: "hover:text-red-600" },
    { icon: Twitter, url: schoolInfo.socials.twitter, label: "Twitter", color: "hover:text-blue-400" },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us. We're here to answer your questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* GOOGLE FORM */}
          <Card>
            <CardContent className="p-0">
              <div className="w-full h-[700px] sm:h-[760px] md:h-[800px] lg:h-[830px] overflow-hidden rounded-lg">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSet6SuqsD5T9KkFglldGhmt7vd4i6QWwvaVRUDVuL13rpTl8g/viewform?embedded=true"
                  className="w-full h-full rounded-lg border-0"
                  loading="lazy"
                  title="Enquiry Form"
                />
              </div>

            </CardContent>
          </Card>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-6">

            {/* Contact Info */}
            <Card>
              <CardContent className="p-2">
                <h2 className="text-2xl font-heading font-bold mb-6">Contact Information</h2>

                <div className="space-y-4">
                  {contactDetails.map((detail, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <detail.icon size={24} className="text-primary" />
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold mb-1">{detail.label}</p>

                        {detail.href ? (
                          <a
                            href={detail.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">Connect With Us</h2>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`h-12 w-12 rounded-full bg-muted flex items-center justify-center transition-all ${social.color} hover:scale-110`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardContent className="p-0 overflow-hidden">
                <iframe
                  src={schoolInfo.mapEmbedUrl}
                  width="100%"
                  height="300"
                  className="w-full border-0 rounded-b-lg"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                />
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};
