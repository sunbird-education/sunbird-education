import * as Icons from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FacilityCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FacilityCard = ({ icon, title, description }: FacilityCardProps) => {
  const Icon = (Icons as any)[icon] || Icons.Circle;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardContent className="p-6">
        <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
        </div>
        <h3 className="text-lg font-heading font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
