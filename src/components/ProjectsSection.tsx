import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "EduVision n8n Agent",
      description: "An intelligent agent built with n8n that takes input from Telegram (like PYQs or custom questions) and automatically generates PDFs with multiple styles (GenZ, Formal, Tabular, and Summaries).",
      tags: ["n8n", "Telegram Bot API", "PDF generation", "Node.js", "JavaScript"],
      image: "📚",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Calendar Reminder Agent",
      description: "A productivity agent designed using n8n, integrated with Google Calendar. It allows users to set reminders or schedule tasks directly from Telegram, which are instantly synced to Google Calendar when triggered.",
      tags: ["n8n", "Google Calendar API", "Telegram Bot API", "Node.js"],
      image: "📅",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "MindMorph Project",
      description: "An AI-powered study assistant where users can input questions or notes. The system generates Flashcards, MCQs, Fill-in-the-Blanks, Mindmaps, and also uses Spaced Repetition with email reminders.",
      tags: ["React.js", "Flask/Node.js", "n8n workflows", "MongoDB", "OpenAI/LLMs"],
      image: "🧠",
      liveUrl: "#",
      githubUrl: "#",
      status: "under-construction",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my favorite projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass hover-glow border-0 group overflow-hidden">
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-primary flex items-center justify-center text-6xl group-hover:animate-pulse-glow">
                {project.image}
              </div>
              
              <CardHeader className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-display font-semibold text-foreground">
                    {project.title}
                  </CardTitle>
                  {project.status === "under-construction" && (
                    <span className="px-3 py-1 text-xs font-medium bg-orange-500/10 text-orange-500 rounded-full border border-orange-500/20">
                      Under Construction
                    </span>
                  )}
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass hover-glow border-primary/20"
                    disabled={project.status === "under-construction"}
                    asChild={project.status !== "under-construction"}
                  >
                    {project.status === "under-construction" ? (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Under Construction
                      </>
                    ) : (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-4 hover-glow"
                    disabled={project.status === "under-construction"}
                    asChild={project.status !== "under-construction"}
                  >
                    {project.status === "under-construction" ? (
                      <Github className="w-4 h-4" />
                    ) : (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="glass hover-glow border-primary/20 px-8 py-6 text-lg rounded-2xl">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;