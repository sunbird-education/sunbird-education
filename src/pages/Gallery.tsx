import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { galleryImages } from "@/data/sampleContent";
import YouTubeGallery from "@/components/ui/videos";

export const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;
  
  const allImages = [
    ...galleryImages.independenceDay,
    ...galleryImages.annualDay,
    ...galleryImages.schoolTrips,
    ...galleryImages.nationalEvents,
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Photo Gallery</h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of joy, learning, and achievement at Sunbird Education Center
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 md:grid-cols-6 mb-8 h-auto">
            <TabsTrigger value="all" className="py-3">All Photos</TabsTrigger>
            <TabsTrigger value="independence" className="py-3">Independence Day</TabsTrigger>
            <TabsTrigger value="annual" className="py-3">Annual Day</TabsTrigger>
            <TabsTrigger value="trips" className="py-3">Educational Activities</TabsTrigger>
            <TabsTrigger value="national" className="py-3">Events</TabsTrigger>
            <TabsTrigger value="videos" className="py-3">Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="mb-4 text-center text-muted-foreground">
              Showing {allImages.length} photos
            </div>
            <ImageGallery images={allImages} columns={4} />
          </TabsContent>

          <TabsContent value="independence" className="mt-8">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-heading font-bold mb-2">Independence Day Celebrations</h2>
              <p className="text-muted-foreground">
                Patriotic fervor and cultural programs celebrating India's Independence
              </p>
            </div>
            <ImageGallery images={galleryImages.independenceDay} columns={4} />
          </TabsContent>

          <TabsContent value="annual" className="mt-8">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-heading font-bold mb-2">Annual Day Function</h2>
              <p className="text-muted-foreground">
                Showcasing student talents through performances, awards, and celebrations
              </p>
            </div>
            <ImageGallery images={galleryImages.annualDay} columns={4} />
          </TabsContent>

          <TabsContent value="trips" className="mt-8">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-heading font-bold mb-2">Educational Activities</h2>
              <p className="text-muted-foreground">
                Learning beyond classrooms through creative activities
              </p>
            </div>
            <ImageGallery images={galleryImages.schoolTrips} columns={4} />
          </TabsContent>

          <TabsContent value="national" className="mt-8">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-heading font-bold mb-2">Cultural Observances</h2>
              <p className="text-muted-foreground">
                Commemorating important days and events with enthusiasm
              </p>
            </div>
            <ImageGallery images={galleryImages.nationalEvents} columns={4} />
          </TabsContent>

          <TabsContent value="videos" className="mt-8">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-heading font-bold mb-2">Video Gallery</h2>
              <p className="text-muted-foreground">
                Where every video tells a story
              </p>
            </div>
            <YouTubeGallery apiKey={API_KEY} channelId={CHANNEL_ID} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
