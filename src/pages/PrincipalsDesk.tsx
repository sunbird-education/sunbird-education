import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { leadership } from "@/data/sampleContent";

export const PrincipalsDesk = () => {
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Principal's Desk</h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded" />
          </div>

          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 aspect-square md:aspect-auto">
                <img
                  src={leadership.principal.image}
                  alt={leadership.principal.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="md:w-2/3 p-8">
                <h2 className="text-2xl font-heading font-bold mb-2">{leadership.principal.name}</h2>
                <p className="text-primary font-semibold mb-6">{leadership.principal.title}</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Dear Students, Parents, and Well-wishers,</p>
                  <p>{leadership.principal.message}</p>
                  <p>
                    Education is not just about textbooks and examinations; it's about building character,
                    developing critical thinking, and instilling values that last a lifetime. At Sunbird
                    Education Center, we strive to create an environment where every student can discover
                    their unique talents and pursue their passions.
                  </p>
                  <p>
                    Our dedicated team of educators works tirelessly to ensure that each child receives
                    personalized attention and guidance. We believe in the power of collaboration between
                    teachers, students, and parents to create a truly enriching educational experience.
                  </p>
                  <p>
                    As we continue our journey towards excellence, I invite you to be part of our vibrant
                    learning community. Together, we will shape a brighter future for our children.
                  </p>
                  <p className="pt-4 font-semibold text-foreground">
                    Warm regards,<br />
                    {leadership.principal.name}<br />
                    {leadership.principal.title}
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
