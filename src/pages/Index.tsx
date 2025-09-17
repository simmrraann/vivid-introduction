import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResourcesSection from "@/components/ResourcesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResourcesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Simran
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;