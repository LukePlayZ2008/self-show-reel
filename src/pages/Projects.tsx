import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with user authentication, product catalog, shopping cart, and payment integration. Built with a focus on performance and user experience.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    challenges: "Implemented real-time inventory management and optimized database queries for handling thousands of products efficiently.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative project management tool that helps teams organize, track, and manage their work. Features include real-time updates, drag-and-drop functionality, and team collaboration.",
    image: "/placeholder.svg",
    tags: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    challenges: "Built real-time synchronization across multiple users and implemented optimistic UI updates for better perceived performance.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered application that generates high-quality content for various purposes including blog posts, social media, and marketing copy. Integrates with OpenAI's GPT models.",
    image: "/placeholder.svg",
    tags: ["Next.js", "OpenAI API", "PostgreSQL", "Vercel"],
    challenges: "Designed a token management system to optimize API costs and implemented streaming responses for better user experience.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Real-Time Chat Application",
    description: "A modern messaging application with support for private chats, group conversations, file sharing, and end-to-end encryption. Built for scalability and security.",
    image: "/placeholder.svg",
    tags: ["React", "Socket.io", "Node.js", "Redis", "MongoDB"],
    challenges: "Implemented WebSocket connections with automatic reconnection and message queuing for handling network interruptions.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Portfolio Website Template",
    description: "A customizable portfolio template for developers and designers. Features a clean, modern design with smooth animations and excellent performance scores.",
    image: "/placeholder.svg",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    challenges: "Optimized bundle size and implemented code splitting to achieve 100 Lighthouse performance score.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard for tracking website metrics, user behavior, and business KPIs. Features interactive charts and real-time data visualization.",
    image: "/placeholder.svg",
    tags: ["React", "D3.js", "GraphQL", "PostgreSQL"],
    challenges: "Built custom chart components optimized for rendering large datasets and implemented efficient data aggregation queries.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const Projects = () => {
  return (
    <PageLayout>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects I've worked on. Each one represents unique challenges and learning experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden shadow-soft border-0 bg-card/80 backdrop-blur-sm card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="aspect-video md:aspect-auto bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Details */}
                <CardContent className="p-6 sm:p-8 flex flex-col justify-center">
                  <h2 className="text-xl sm:text-2xl font-bold mb-3">
                    {project.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Challenges */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-primary mb-1">
                      Key Challenge Solved
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.challenges}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button asChild className="gap-2">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="gap-2">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
