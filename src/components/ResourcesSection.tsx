import { Calendar, BookOpen, Video, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResourcesSection = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "AI & Machine Learning Guide",
      description: "A comprehensive guide to getting started with AI and machine learning fundamentals.",
      type: "Blog Post",
      date: "March 15, 2024",
      readTime: "8 min read",
      downloadUrl: "#"
    },
    {
      icon: Video,
      title: "Web Development Tutorial Series",
      description: "Step-by-step video tutorials covering modern web development practices and frameworks.",
      type: "Video Series",
      date: "February 28, 2024",
      readTime: "45 min watch",
      downloadUrl: "#"
    },
    {
      icon: Download,
      title: "Free Design System Template",
      description: "A complete design system template with components, tokens, and documentation.",
      type: "Template",
      date: "February 10, 2024",
      readTime: "Download",
      downloadUrl: "#"
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

          <div className="text-center">
            <Card className="glass neumorphism border-0 p-8 max-w-2xl mx-auto">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Want More Resources?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Subscribe to my newsletter to get notified when I publish new tutorials, 
                  resources, and insights about AI, development, and entrepreneurship.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-accent text-primary-foreground hover-glow font-medium px-8 py-6 text-lg rounded-2xl"
                >
                  Subscribe to Newsletter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;