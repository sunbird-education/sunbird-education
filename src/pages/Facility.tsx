import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FacilityCard } from "@/components/ui/FacilityCard";
import { facilities } from "@/data/sampleContent";

export const Facility = () => {
  const facilityImages = [
    { url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800", caption: "Science Laboratory" },
    { url: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800", caption: "Computer Lab" },
    { url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800", caption: "Library" },
    { url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800", caption: "Sports Complex" },
    { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800", caption: "Multipurpose Hall" },
    { url: "https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?w=800", caption: "Cafeteria" },
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Facilities</h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              World-class infrastructure designed to provide the best learning environment for holistic
              development
            </p>
          </div>

          {/* Facility Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {facilities.map((facility, index) => (
              <FacilityCard key={index} {...facility} />
            ))}
          </div>

          {/* Featured Images */}
          <div className="mb-16">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">Facility Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {facilityImages.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden group">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <p className="text-white font-semibold p-4">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-4">Safety & Security</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The safety and security of our students is our top priority. Our campus is equipped with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>24/7 CCTV surveillance across the entire campus</li>
                  <li>Trained security personnel at all entry and exit points</li>
                  <li>Fire safety equipment and regular safety drills</li>
                  <li>First aid facilities and trained medical staff</li>
                  <li>GPS-enabled school transport with trained drivers</li>
                  <li>Controlled access system for visitors</li>
                  <li>Regular safety audits and compliance checks</li>
                </ul>
                <p className="pt-4">
                  We maintain strict protocols to ensure that every child is safe, secure, and well-cared
                  for throughout their time at school.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">Experience our facilities in person</p>
            <Button asChild size="lg">
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
