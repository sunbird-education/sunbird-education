import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { leadership } from "@/data/sampleContent";

export const ManagersDesk = () => {
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Manager's Desk</h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded" />
          </div>

          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 aspect-square md:aspect-auto">
                <img
                  src={leadership.manager.image}
                  alt={leadership.manager.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="md:w-2/3 p-8">
                <h2 className="text-2xl font-heading font-bold mb-2">{leadership.manager.name}</h2>
                <p className="text-primary font-semibold mb-6">{leadership.manager.title}</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Dear Parents and Students,</p>
                  <p>{leadership.manager.message}</p>
                  <p>
                    Managing a school is not just about administration; it's about creating a safe,
                    supportive, and inspiring environment where students can flourish. We take great pride
                    in our facilities, our staff, and most importantly, our students who make Sunbird
                    Education Center a special place.
                  </p>
                  <p>
                    Our commitment extends beyond academics to encompass the overall well-being of every
                    child. We maintain the highest standards of safety, cleanliness, and care throughout
                    our campus. From nutritious meals to clean classrooms, from well-equipped labs to
                    spacious playgrounds, every aspect is carefully monitored.
                  </p>
                  <p>
                    We value the trust you place in us and work diligently to ensure that your children
                    receive not just an education, but a foundation for life. Our open-door policy
                    encourages parents to engage with us, share feedback, and be active participants in
                    their children's educational journey.
                  </p>
                  <p className="pt-4 font-semibold text-foreground">
                    Best wishes,<br />
                    {leadership.manager.name}<br />
                    {leadership.manager.title}
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
