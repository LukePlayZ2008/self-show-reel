import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack shopping experience with modern UI",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool",
    image: "/placeholder.svg",
    tags: ["TypeScript", "Firebase", "Tailwind"],
  },
  {
    id: 3,
    title: "Portfolio Template",
    description: "Modern developer portfolio template",
    image: "/placeholder.svg",
    tags: ["React", "Framer Motion"],
  },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <Card className="w-full max-w-2xl shadow-soft-lg border-0 bg-card/80 backdrop-blur-sm card-hover">
          <CardContent className="p-8 sm:p-12 text-center">
            {/* Avatar */}
            <div className="mb-6 animate-scale-in">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent overflow-hidden ring-4 ring-background shadow-soft-lg">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name & Title */}
            <div className="space-y-2 mb-6 animate-fade-in delay-100">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Your Name
              </h1>
              <p className="text-xl text-primary font-medium">
                Software Developer
              </p>
            </div>

            {/* Tagline */}
            <p className="text-muted-foreground text-lg mb-8 animate-fade-in delay-200">
              Crafting elegant digital experiences with clean code and modern design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
              <Button asChild size="lg" className="gap-2">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Featured Projects Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work. Each project represents a unique challenge and solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 shadow-soft bg-card/80 backdrop-blur-sm card-hover animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Projects */}
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
