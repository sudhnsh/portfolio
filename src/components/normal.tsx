"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  Code,
  Palette,
  Database,
  Globe,
  Star,
  Terminal,
  Monitor,
  MapPin,
  Download,
  Award,
  Moon,
  Sun,
  Zap,
  Cpu,
} from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Terminal Portfolio",
    description:
      "Interactive terminal-style portfolio with 6 different themes, command system, and typing animations. Built to showcase skills in a unique, developer-friendly interface.",
    longDescription:
      "A fully interactive terminal emulator built in React with TypeScript. Features include command history, tab completion, multiple color themes, and real-time typing effects.",
    url: "/my-terminal",
    github: "https://github.com/sudhnsh/terminal-portfolio",
    screenshot: "/placeholder.svg?height=300&width=500",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Web App",
    featured: true,
    year: 2024,
    status: "Live",
    icon: Terminal,
  },
  {
    id: 2,
    title: "Subscription Price Index",
    description:
      "Compare streaming service prices across countries with VPN-friendly indicators and savings calculations up to 80%.",
    longDescription:
      "A comprehensive tool for comparing subscription prices across different countries, helping users save money on streaming services like Netflix, Spotify, and more.",
    url: "/subscription-index",
    github: "https://github.com/sudhnsh/subscription-index",
    screenshot: "/placeholder.svg?height=300&width=500",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    category: "Web App",
    featured: true,
    year: 2024,
    status: "Live",
    icon: Globe,
  },
  {
    id: 3,
    title: "Better Extensions Suite",
    description:
      "Suite of Chrome Extensions for Enhanced Browsing including Search With, Better New Tab Lite, and Better Skip Ads.",
    url: "https://chrome.google.com/webstore",
    github: "https://github.com/sudhnsh/better-extensions",
    screenshot: "/placeholder.svg?height=300&width=500",
    tech: ["JavaScript", "Chrome API", "React", "TailwindCSS"],
    category: "Browser Extension",
    featured: false,
    year: 2024,
    status: "Live",
    icon: Monitor,
    users: "95+ weekly active users",
  },
]

const skills = [
  { name: "Frontend", icon: Code, items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"] },
  { name: "Backend", icon: Database, items: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB"] },
  { name: "Tools & Others", icon: Palette, items: ["AWS", "Git", "Power BI", "PySpark", "Android", "Chrome Extensions"] },
]

const experience = [
    {
        company: "MAQ Software",
        position: "Software Engineer 1",
        duration: "Dec 2023 – Present",
        location: "Noida, India",
        description: [
          "Built an interactive SQL Visualizer using React and node-sql-parser to help developers debug and understand SQL queries visually.",
          "Created internal tools including a developer portal and an OpenAI model router to streamline access and automation.",
          "Developed custom Power BI visuals and optimized reporting pipelines using React, TypeScript, SQL, Python, and PySpark — improving query performance by 35%."
        ],
        tech: ["React", "Node.js", "TypeScript", "Power BI", "SQL", "Python", "PySpark"],
      },
      {
        company: "TimelyAI",
        position: "Software Engineer",
        duration: "Sept 2023 – Dec 2023",
        location: "Remote",
        description: [
          "Designed and implemented scalable microservices using AWS Lambda, S3, CloudWatch, and Athena.",
          "Developed an automated image processing pipeline integrated with the FIGMA API using Python and the Pillow library.",
          "Improved system reliability and uptime by 40% through better error handling and monitoring."
        ],
        tech: ["Python", "AWS", "PostgreSQL", "Git", "GitHub"],
      },
      {
        company: "Samsung R&D",
        position: "Research and Development Intern",
        duration: "Jan 2023 – Jun 2023",
        location: "Noida, India",
        description: [
          "Implemented unit testing using Mockito and JUnit, achieving 80% code coverage for a Clock Application.",
          "Contributed to the development of new features in the application using Java and Kotlin.",
          "Collaborated with cross-functional Android development teams to ensure consistent feature delivery."
        ],
        tech: ["Java", "Kotlin", "Android", "JUnit", "Mockito"],
      }
      
]

const achievements = [
  {
    title: "Microsoft Certified: Fabric Analytics Engineer Associate",
    issuer: "Microsoft",
    date: "2024",
    icon: Award,
  },
  {
    title: "268 Global Rank - Reply Standard Code Challenge 2022",
    issuer: "Reply",
    date: "2022",
    icon: Star,
  },
  {
    title: "242 All India Rank - Google HashCode'22",
    issuer: "Google",
    date: "2022",
    icon: Star,
  },
  {
    title: "2nd Rank - Digital Village Hackathon",
    issuer: "Google DSC, TIET",
    date: "2022",
    icon: Award,
  },
]

export default function NormalPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const categories = ["All", "Web App", "Browser Extension"]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold pixel-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              &lt;SUDHNSH/&gt;
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-mono">
                ./about
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors font-mono">
                ./projects
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors font-mono">
                ./experience
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors font-mono">
                ./skills
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-mono">
                ./contact
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={toggleDarkMode} className="font-mono bg-transparent">
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button variant="outline" size="sm" asChild className="font-mono bg-transparent">
                <a href="https://github.com/sudhnsh" target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button size="sm" asChild className="font-mono retro-glow">
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <div className="text-sm font-mono text-muted-foreground mb-2">&gt; whoami</div>
                <h1 className="text-4xl md:text-6xl font-bold mb-2">
                  <span className="pixel-text bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    SUDHANSHU_POONIA
                  </span>
                </h1>
                <div className="text-xl md:text-2xl font-mono text-muted-foreground mb-4">
                  &gt; Software Engineer
                </div>
              </div>
            </div>

            <div className="max-w-4xl mb-8">
              <div className="font-mono text-sm text-muted-foreground mb-2">&gt; cat about.txt</div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Writes mostly clean and efficient code — at least it works on{' '}
                  <span className="text-green-400 font-mono">my machine</span>. Currently working at{' '}
                  <span className="text-blue-400 font-mono">MAQ Software</span>, and previously interned at{' '}
                  <span className="text-pink-400 font-mono">Samsung</span>. Enjoys working with{' '}
                  <span className="text-green-400 font-mono">React</span>,{' '}
                  <span className="text-green-400 font-mono">Node.js</span>, and occasionally dabbles in{' '}
                  <span className="text-green-400 font-mono">data</span> and{' '}
                  <span className="text-green-400 font-mono">cloud stuff</span>.
                </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-card border border-border p-4 font-mono text-center">
                  <div className="text-2xl font-bold text-green-400">1+</div>
                  <div className="text-xs text-muted-foreground">YEARS_EXP</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="font-mono retro-glow">
                <a href="#projects">
                  <Zap className="w-5 h-5 mr-2" />
                  VIEW_PROJECTS
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="font-mono bg-transparent">
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  DOWNLOAD_CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Spotlight - Terminal Portfolio */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl">
          <div className="mb-12">
            <div className="font-mono text-sm text-muted-foreground mb-2">&gt; ls featured_projects/</div>
            <Badge className="mb-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-mono text-xs">
              FEATURED_PROJECT.exe
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Interactive Terminal Portfolio</h2>
            <p className="text-muted-foreground max-w-2xl">
              A unique, developer-friendly portfolio experience built as an interactive terminal with multiple themes,
              command system, and real-time typing effects.
            </p>
          </div>

          <Card className="overflow-hidden border-2 border-green-500/50 shadow-xl retro-glow scanlines">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="aspect-video bg-gradient-to-br from-black via-gray-900 to-green-900 relative flex items-center justify-center p-6">
                  <div className="text-green-400 font-mono text-sm space-y-1 w-full">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-2 text-green-300">sudhnsh@portfolio:~$</span>
                    </div>
                    <div>sudhnsh@portfolio:~$ help</div>
                    <div className="text-green-300">Available commands:</div>
                    <div className="text-green-400"> about - About Sudhanshu</div>
                    <div className="text-green-400"> proj - List all projects</div>
                    <div className="text-green-400"> theme - Switch terminal themes</div>
                    <div className="animate-pulse mt-2">sudhnsh@portfolio:~$ █</div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "TypeScript", "Next.js", "Tailwind CSS"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3 text-muted-foreground mb-6 font-mono text-sm">
                  <li className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-green-500" />
                    Interactive command system with history
                  </li>
                  <li className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-blue-500" />6 different terminal themes (matrix, cyber, amber,
                    etc.)
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    Real-time typing animations and effects
                  </li>
                  <li className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-purple-500" />
                    Responsive design with CRT-style effects
                  </li>
                </ul>
                <div className="flex gap-3">
                  <Button asChild className="font-mono retro-glow">
                    <a href="/my-terminal" target="_blank" rel="noreferrer">
                      <Terminal className="w-4 h-4 mr-2" />
                      RUN_TERMINAL
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl">
            <div className="mb-12">
              <div className="font-mono text-sm text-muted-foreground mb-2">&gt; ls projects/ --all</div>
              <h2 className="text-3xl font-bold mb-4 font-mono">All Projects</h2>
              <p className="text-muted-foreground max-w-2xl">
                A collection of web applications, tools, and extensions I've built using modern technologies.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex gap-4 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                  className="font-mono"
                >
                  {category.toUpperCase()}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50"
                >
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-muted to-muted/50 border-b border-border">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="mb-2 font-mono">{project.category.toUpperCase()}</Badge>
                        <h3 className="text-white font-semibold text-lg font-mono">{project.title}</h3>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                    {project.users && (
                      <p className="text-sm text-green-400 font-medium mb-3 font-mono">📊 {project.users}</p>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs font-mono">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs font-mono">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button size="sm" className="flex-1 font-mono" asChild>
                        <a href={project.url} target="_blank" rel="noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Go To
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <div className="mb-12">
            <div className="font-mono text-sm text-muted-foreground mb-2">&gt; cat work_experience.log</div>
            <h2 className="text-3xl font-bold font-mono">Work Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold font-mono">{exp.position}</h3>
                      <p className="text-lg text-primary font-medium font-mono">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground font-medium font-mono">{exp.duration}</p>
                      <p className="text-muted-foreground text-sm font-mono">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl">
            <div className="mb-12">
              <div className="font-mono text-sm text-muted-foreground mb-2">&gt; ls skills/ --tree</div>
              <h2 className="text-3xl font-bold mb-4 font-mono">Skills & Technologies</h2>
              <p className="text-muted-foreground max-w-2xl">Technologies and tools I use to bring ideas to life.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill) => (
                <Card
                  key={skill.name}
                  className="text-center hover:shadow-lg transition-shadow border-border/50 hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center pixel-border retro-glow">
                      <skill.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 font-mono">{skill.name}</h3>
                    <div className="space-y-2">
                      {skill.items.map((item) => (
                        <Badge key={item} variant="outline" className="mr-2 mb-2 font-mono text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <div className="mb-12">
            <div className="font-mono text-sm text-muted-foreground mb-2">&gt; cat achievements.json</div>
            <h2 className="text-3xl font-bold font-mono">Achievements & Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 pixel-border retro-glow">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 font-mono">{achievement.title}</h3>
                      <p className="text-primary text-sm font-medium font-mono">{achievement.issuer}</p>
                      <p className="text-muted-foreground text-sm font-mono">{achievement.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-12">
              <div className="font-mono text-sm text-muted-foreground mb-2">&gt; cat contact.info</div>
              <h2 className="text-3xl font-bold mb-4 font-mono">Let's Work Together</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
                ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow border-border/50 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 font-mono">EMAIL</h3>
                  <p className="text-muted-foreground text-sm font-mono">sudhnsh16@hotmail.com</p>
                  <p className="text-muted-foreground text-sm font-mono">sudhnsh16@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-border/50 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 font-mono">LOCATION</h3>
                  <p className="text-muted-foreground text-sm font-mono">Noida, India</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild className="font-mono retro-glow">
                <a href="mailto:sudhnsh16@hotmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  SEND_EMAIL
                </a>
              </Button>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/sudhnsh"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                rel="noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/sudhnsh"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                rel="noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="font-mono text-sm text-muted-foreground">
                &copy; 2024 SUDHANSHU_POONIA. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6 font-mono text-sm">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                ./about
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                ./projects
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                ./experience
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                ./contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
