import { Brain, Code, Rocket, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Passionate about machine learning and artificial intelligence, always exploring the latest innovations."
    },
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Building web applications with modern technologies and best practices."
    },
    {
      icon: Rocket,
      title: "Entrepreneur",
      description: "Turning ideas into reality with a focus on solving real-world problems."
    },
    {
      icon: Heart,
      title: "Content Creator",
      description: "Sharing knowledge and experiences through blogs, tutorials, and social media."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a curious mind who loves to learn, create, and share. Currently pursuing my degree in 
              AI & Data Science while building projects and sharing my journey with others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {highlights.map((item, index) => (
              <Card key={index} className="glass hover-glow border-0 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-primary group-hover:animate-pulse-glow">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="glass rounded-2xl p-8 neumorphism">
              <p className="text-lg text-foreground leading-relaxed">
                "I believe in the power of technology to make a positive impact. 
                Whether it's through code, content, or collaboration, I'm always 
                looking for ways to contribute to something meaningful."
              </p>
              <div className="mt-4">
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;