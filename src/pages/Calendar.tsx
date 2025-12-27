import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Printer, Calendar as CalendarIcon } from "lucide-react";
import { academicCalendar, calendarPdfUrl } from "@/data/calendar";

export const Calendar = () => {
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "holiday":
        return "bg-red-500/10 text-red-700 border-red-200";
      case "exam":
        return "bg-blue-500/10 text-blue-700 border-blue-200";
      case "event":
        return "bg-green-500/10 text-green-700 border-green-200";
      case "activity":
        return "bg-purple-500/10 text-purple-700 border-purple-200";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getEventTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const handleDownload = () => {
    window.open(calendarPdfUrl, "_blank");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Academic Calendar
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic Year 2025–26 • Session begins April 2025
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button onClick={handleDownload} size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
            <Button onClick={handlePrint} variant="outline" size="lg">
              <Printer className="mr-2 h-5 w-5" />
              Print Calendar
            </Button>
          </div>

          {/* Legend */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Event Types</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="text-sm">Holiday</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                  <span className="text-sm">Examination</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-sm">Event</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-500" />
                  <span className="text-sm">Activity</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Calendar Data */}
          <div className="space-y-6">
            {academicCalendar.map((monthData, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="bg-primary text-primary-foreground p-4">
                  <h2 className="text-xl font-heading font-bold flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    {monthData.month}
                  </h2>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-3">
                    {monthData.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`p-4 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${getEventTypeColor(
                          event.type
                        )}`}
                      >
                        <div className="flex-1">
                          <div className="flex items-start gap-3">
                            <span className="font-bold text-sm whitespace-nowrap">
                              {event.date}
                            </span>
                            <div>
                              <p className="font-semibold">{event.title}</p>
                              {event.description && (
                                <p className="text-sm mt-1 opacity-90">
                                  {event.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-background/50 self-start sm:self-center">
                          {getEventTypeLabel(event.type)}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Notes */}
          <Card className="mt-12">
            <CardContent className="p-6">
              <h3 className="font-heading font-bold text-lg mb-4">
                Important Notes
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• The calendar is subject to change if required.</li>
                <li>• Examination dates are tentative and will be confirmed in advance.</li>
                <li>• Parent-teacher meetings are mandatory.</li>
                <li>• Students must attend school on all working days.</li>
                <li>• For queries, please contact the school office.</li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};
