import { Calendar, BookOpen, Video, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResourcesSection = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Engineering Study Notes",
      description: "Well-organized Notion notes covering key engineering subjects with simplified explanations and examples for quick revision.",
      type: "Notes",
      date: "Updated Regularly",
      readTime: "Study Material",
      downloadUrl: "https://www.notion.so/5th-SEM-23feadaab1de801dba82c7e0a7be36c7?source=copy_link"
    },
    {
      icon: Video,
      title: "n8n Agent Basics Guide",
      description: "Beginner-friendly notes on how n8n works, with examples of building automation workflows and Telegram integrations.",
      type: "Tutorial",
      date: "Coming Soon",
      readTime: "Tutorial Series",
      downloadUrl: "https://www.notion.so/N8N-notes-271eadaab1de802a99d1ce62dcea967a?source=copy_link"
    },
    {
      icon: Download,
      title: "AI Tools",
      description: "Curated collection of my notes and references on AI automation, workflows, and project building.",
      type: "Collection",
      date: "Growing Collection",
      readTime: "Resource Hub",
      downloadUrl: "https://www.notion.so/Ai-tools-243eadaab1de80b08ab6cde6e8dad26c?source=copy_link"
    },
  ];

  return (
    <section id="resources" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 gradient-text">
              Free Resources
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              I love sharing knowledge! Here are some free resources, tutorials, and tools 
              I've created to help others on their learning journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {resources.map((resource, index) => (
              <Card key={index} className="glass hover-glow border-0 group">
                <CardHeader className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-secondary group-hover:animate-pulse-glow">
                      <resource.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                      {resource.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-display font-semibold text-foreground">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {resource.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {resource.date}
                    </div>
                    <span>{resource.readTime}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full glass hover-glow border-primary/20"
                    asChild
                  >
                    <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer">
                      {resource.type === "Template" ? (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </>
                      ) : (
                        <>
                          <BookOpen className="w-4 h-4 mr-2" />
                          Read More
                        </>
                      )}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;