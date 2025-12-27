import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, BookOpen, Award } from "lucide-react";
import { aboutSchool, schoolInfo } from "@/data/sampleContent";

export const AboutSchool = () => {
  const highlights = [
    { icon: Calendar, label: "Established", value: "2006" },
    { icon: Users, label: "Students", value: "500+" },
    { icon: BookOpen, label: "Faculty", value: "50+" },
    { icon: Award, label: "Board", value: "CBSE" },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/about">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to About
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Our School</h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded mb-6" />
            <p className="text-xl text-muted-foreground">{schoolInfo.tagline}</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center border-primary/20">
                <CardContent className="p-6">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary mb-1">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* History */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Our Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed">{aboutSchool.history}</p>
            </CardContent>
          </Card>

          {/* Overview */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">{aboutSchool.overview}</p>
            </CardContent>
          </Card>

          {/* Image Gallery */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800"
                alt="School building"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800"
                alt="School classroom"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Key Features */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Why Choose Sunbird?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "CBSE Affiliated Curriculum",
                  "Experienced & Qualified Faculty",
                  "Technology-Enabled Learning",
                  "Optimal Teacher-Student Ratio (1:20)",
                  "Holistic Development Programs",
                  "State-of-the-Art Infrastructure",
                  "Safe & Secure Environment",
                  "Co-curricular Activities",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">Want to learn more or schedule a visit?</p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
