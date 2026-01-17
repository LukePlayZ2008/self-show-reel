import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js", "Python",
  "HTML5", "CSS3", "Tailwind CSS", "Firebase", "MongoDB",
  "PostgreSQL", "Git", "Docker", "REST APIs", "GraphQL"
];

const experience = [
  {
    type: "work",
    title: "Senior Software Developer",
    organization: "Tech Company Inc.",
    period: "2022 - Present",
    description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices.",
  },
  {
    type: "work",
    title: "Software Developer",
    organization: "Digital Agency",
    period: "2020 - 2022",
    description: "Built responsive web applications for various clients using React, Node.js, and modern development practices.",
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    organization: "University Name",
    period: "2016 - 2020",
    description: "Focused on software engineering, algorithms, and web development. Graduated with honors.",
  },
];

const About = () => {
  return (
    <PageLayout>
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating beautiful, functional applications.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Bio Card */}
          <Card className="shadow-soft border-0 bg-card/80 backdrop-blur-sm animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">👋</span> Hello!
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-muted max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I'm a software developer based in [Your City] with over 4 years of experience 
                building web applications. I specialize in React and Node.js, with a passion 
                for creating intuitive user experiences and clean, maintainable code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge through technical writing. 
                I believe in continuous learning and pushing the boundaries of what's possible 
                with modern web technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to new opportunities and collaborations. Whether you have a 
                project in mind or just want to connect, feel free to reach out!
              </p>
            </CardContent>
          </Card>

          {/* Skills Card */}
          <Card className="shadow-soft border-0 bg-card/80 backdrop-blur-sm animate-slide-up delay-100">
            <CardHeader>
              <CardTitle>Skills & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience Timeline Card */}
          <Card className="shadow-soft border-0 bg-card/80 backdrop-blur-sm animate-slide-up delay-200">
            <CardHeader>
              <CardTitle>Experience & Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <div key={index} className="relative pl-8 pb-8 last:pb-0 border-l-2 border-border last:border-transparent">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/20 ring-4 ring-background flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    {/* Icon */}
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-lg bg-accent items-center justify-center">
                        {item.type === "work" ? (
                          <Briefcase className="h-5 w-5 text-accent-foreground" />
                        ) : (
                          <GraduationCap className="h-5 w-5 text-accent-foreground" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                          <h3 className="font-semibold">{item.title}</h3>
                          <span className="text-sm text-muted-foreground">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-primary font-medium text-sm mb-2">
                          {item.organization}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Download Resume */}
          <div className="text-center animate-fade-in delay-300">
            <Button size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
