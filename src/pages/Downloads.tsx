import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, File } from "lucide-react";
import { downloads } from "@/data/sampleContent";

export const Downloads = () => {
  const getFileIcon = (filename: string) => {
    if (filename.endsWith(".pdf")) return FileText;
    if (filename.endsWith(".doc") || filename.endsWith(".docx")) return File;
    return FileText;
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Downloads
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Important school documents available for download
            </p>
          </div>

          {/* Download List */}
          <div className="space-y-4">
            {downloads.map((doc, index) => {
              const FileIcon = getFileIcon(doc.filename);

              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileIcon className="h-8 w-8 text-primary" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-heading font-bold mb-1">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {doc.description}
                        </p>
                        <p className="text-xs text-muted-foreground font-mono">
                          {doc.filename} • {doc.size}
                        </p>
                      </div>

                      {/* REAL DOWNLOAD */}
                      <a
                        href={`/downloads/${doc.filename}`}
                        download
                        className="w-full sm:w-auto"
                      >
                        <Button className="w-full sm:w-auto">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Info Box */}
          <Card className="mt-12 border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-lg font-heading font-bold mb-3">Note:</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Fees once paid are non-refundable.</li>
                <li>• The fee structure is applicable for the academic session 2025–26.</li>
                <li>• For any clarification, please contact the school office.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
