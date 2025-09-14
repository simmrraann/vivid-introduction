import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingIcon from "./FloatingIcon";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Floating Icons */}
      <FloatingIcon 
        icon="💻" 
        className="top-20 left-[10%] float-delayed" 
      />
      <FloatingIcon 
        icon="📚" 
        className="top-32 right-[15%] float" 
      />
      <FloatingIcon 
        icon="✨" 
        className="bottom-32 left-[20%] float-delayed-2" 
      />
      <FloatingIcon 
        icon="🚀" 
        className="top-40 left-[50%] float-delayed" 
      />
      <FloatingIcon 
        icon="🎨" 
        className="bottom-40 right-[10%] float" 
      />

      {/* Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-gradient-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="block text-foreground">Hey, I'm</span>
              <span className="block gradient-text">[Your Name]!</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I'm an <span className="text-primary font-medium">AI & Data Science student</span>, aspiring entrepreneur, and <span className="text-accent font-medium">content creator</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover-glow font-medium px-8 py-6 text-lg rounded-2xl border-0 shadow-soft"
              >
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass hover-glow font-medium px-8 py-6 text-lg rounded-2xl border-2 border-primary/20"
              >
                My Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <Button variant="ghost" size="sm" className="hover-glow p-3 rounded-xl">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="sm" className="hover-glow p-3 rounded-xl">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="sm" className="hover-glow p-3 rounded-xl">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Profile Photo with Colorful Blob Background */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Colorful Abstract Blobs - Behind Profile Photo */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Bright Yellow Blob */}
                <div className="absolute top-4 left-4 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob"></div>
                
                {/* Turquoise Blue Blob */}
                <div className="absolute top-8 right-6 w-28 h-28 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob animation-delay-2000"></div>
                
                {/* Light Blue Blob */}
                <div className="absolute bottom-6 left-8 w-36 h-36 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                
                {/* Mint Green Blob */}
                <div className="absolute bottom-4 right-4 w-30 h-30 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob animation-delay-1000"></div>
                
                {/* Additional Small Accent Blobs */}
                <div className="absolute top-1/2 left-2 w-20 h-20 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-60 animate-blob animation-delay-3000"></div>
                <div className="absolute top-1/3 right-2 w-24 h-24 bg-teal-300 rounded-full mix-blend-multiply filter blur-lg opacity-65 animate-blob animation-delay-5000"></div>
              </div>
              
              {/* Profile Photo Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden neumorphism z-10">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;