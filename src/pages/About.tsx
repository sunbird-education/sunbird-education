import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Building2, Award, Target, Sparkles } from "lucide-react";

export const About = () => {
  const sections = [
    {
      to: "/about/principals-desk",
      icon: User,
      title: "Principal's Desk",
      description: "Message from our Principal",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      to: "/about/managers-desk",
      icon: User,
      title: "Manager's Desk",
      description: "Message from our School Manager",
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      to: "/about/about-school",
      icon: Building2,
      title: "About School",
      description: "Our history, mission, and values",
      color: "bg-green-500/10 text-green-500",
    },
    {
      to: "/about/facility",
      icon: Sparkles,
      title: "Facilities",
      description: "World-class infrastructure and amenities",
      color: "bg-orange-500/10 text-orange-500",
    },
    {
      to: "/about/achievement",
      icon: Award,
      title: "Achievements",
      description: "Our pride and accomplishments",
      color: "bg-red-500/10 text-red-500",
    },
    {
      to: "/about/vision-mission",
      icon: Target,
      title: "Vision & Mission",
      description: "Our guiding principles and goals",
      color: "bg-indigo-500/10 text-indigo-500",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Us</h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our journey, values, and commitment to educational excellence
          </p>
        </div>

        {/* Section Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sections.map((section) => (
            <Link key={section.to} to={section.to}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 group">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className={`h-16 w-16 rounded-full ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <section.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{section.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{section.description}</p>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Explore <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
