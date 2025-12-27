import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, Trophy, Medal, Star } from "lucide-react";
import { achievements } from "@/data/sampleContent";

export const Achievement = () => {
  const achievementYears = [
    {
      year: "2023-24",
      achievements: [
        "State Champions - Inter-School Science Exhibition",
        "100% Pass Rate in Board Examinations",
        "Best School Award for Community Service",
        "Excellence in Sports - 15 Gold Medals in State Athletics",
      ],
    },
    {
      year: "2022-23",
      achievements: [
        "National Mathematics Olympiad - 5 Gold Medalists",
        "Best School Infrastructure Award",
        "Cultural Excellence Award - Zonal Level",
        "Outstanding Achievement in Environmental Conservation",
      ],
    },
    {
      year: "2021-22",
      achievements: [
        "Best Principal Award - Dr. Rajesh Kumar",
        "State Level Debate Competition - Winners",
        "Perfect Score in Board Exams - 3 Students",
        "Excellence in Digital Learning Implementation",
      ],
    },
    {
      year: "2020-21",
      achievements: [
        "COVID Response Excellence Award",
        "Best Online Teaching Platform Award",
        "Student Welfare Program of the Year",
        "Regional Science Fair - Multiple Winners",
      ],
    },
  ];

  const categories = [
    { icon: Award, label: "Academic Excellence", count: "50+" },
    { icon: Trophy, label: "Sports Achievements", count: "100+" },
    { icon: Medal, label: "Cultural Awards", count: "75+" },
    { icon: Star, label: "Special Recognition", count: "30+" },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/about">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to About
          </Link>
        </Button>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Achievements</h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{achievements.intro}</p>
          </div>

          {/* Achievement Categories */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary mb-2">{category.count}</p>
                  <p className="text-sm text-muted-foreground font-semibold">{category.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Highlights */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Key Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-sm leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Year-wise Achievements */}
          <div className="space-y-8">
            <h2 className="text-2xl font-heading font-bold text-center">Year-wise Achievements</h2>
            {achievementYears.map((yearData, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">{yearData.year}</h3>
                  <ul className="space-y-3">
                    {yearData.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <p className="text-muted-foreground">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievement Gallery */}
          <div className="mt-16">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">Achievement Gallery</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=800",
                "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
                "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
                "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
              ].map((url, index) => (
                <div key={index} className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={url}
                    alt={`Achievement ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">Join us in our journey of excellence</p>
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
