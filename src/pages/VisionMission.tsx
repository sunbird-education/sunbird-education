import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Award, Heart, Lightbulb, Users, Globe } from "lucide-react";
import { visionMission } from "@/data/sampleContent";

export const VisionMission = () => {
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Vision, Mission & Values</h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our guiding principles that shape everything we do
            </p>
          </div>

          {/* Vision */}
          <Card className="mb-8 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Our Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{visionMission.vision}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="mb-8 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{visionMission.mission}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Values */}
          <Card className="mb-12 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Our Core Values</h2>
                <p className="text-muted-foreground">
                  These values guide our actions and define who we are as an institution
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visionMission.values.map((value, index) => (
                  <div key={index} className="p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                      <h3 className="font-semibold text-lg">{value}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* How We Achieve Our Goals */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Embracing modern teaching methodologies and technology to enhance learning experiences
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Building strong partnerships with parents, teachers, and the community
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="h-16 w-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">Global Perspective</h3>
                <p className="text-sm text-muted-foreground">
                  Preparing students to thrive in an interconnected, diverse world
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Commitment Statement */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl font-heading font-bold mb-4">Our Commitment</h2>
              <p className="text-lg mb-6 leading-relaxed">
                We are committed to creating an educational environment that nurtures not just academic
                excellence, but also character, creativity, and compassion. Every decision we make, every
                program we implement, and every interaction we have is guided by our vision, mission, and
                values.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Join Our Community</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
