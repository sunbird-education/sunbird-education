import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FacilityCard } from "@/components/ui/FacilityCard";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { BackgroundSlider } from "@/components/ui/BackgroundSlider";
import { ArrowRight, Award, Target, Heart } from "lucide-react";
import {
  schoolInfo,
  academicSession,
  achievements,
  leadership,
  facilities,
  galleryImages,
  visionMission,
} from "@/data/sampleContent";

export const Home = () => {
  // Get first 8 images from all galleries for preview
  const previewImages = [
    ...galleryImages.independenceDay.slice(0, 2),
    ...galleryImages.annualDay.slice(0, 2),
    ...galleryImages.schoolTrips.slice(0, 2),
    ...galleryImages.nationalEvents.slice(0, 2),
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <BackgroundSlider />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Welcome to {schoolInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              {schoolInfo.tagline}
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Empowering students with knowledge, values, and skills to excel in the 21st century.
              Join us on a journey of academic excellence and holistic development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/about">
                  Explore Our School <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Session */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">{academicSession.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{academicSession.content}</p>
                  <Button asChild className="mt-4" variant="default">
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Achievements</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded" />
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {achievements.intro}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.highlights.map((highlight, index) => (
                <Card key={index} className="border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed">{highlight}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principal & Manager */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Leadership</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={leadership.principal.image}
                  alt={leadership.principal.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-heading font-bold mb-1">{leadership.principal.name}</h3>
                <p className="text-primary font-semibold mb-3">{leadership.principal.title}</p>
                <p className="text-muted-foreground leading-relaxed">{leadership.principal.message}</p>
                <Button asChild variant="link" className="mt-4 p-0">
                  <Link to="/about/principals-desk">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={leadership.manager.image}
                  alt={leadership.manager.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-heading font-bold mb-1">{leadership.manager.name}</h3>
                <p className="text-primary font-semibold mb-3">{leadership.manager.title}</p>
                <p className="text-muted-foreground leading-relaxed">{leadership.manager.message}</p>
                <Button asChild variant="link" className="mt-4 p-0">
                  <Link to="/about/managers-desk">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">World-Class Facilities</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art infrastructure designed to provide the best learning environment
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <FacilityCard key={index} {...facility} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/about/facility">View All Facilities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Glimpses of School Life</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded" />
          </div>
          <ImageGallery images={previewImages} columns={4} />
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/gallery">
                View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Guiding Principles</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">{visionMission.vision}</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">{visionMission.mission}</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">Our Values</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {visionMission.values.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/about/vision-mission">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
