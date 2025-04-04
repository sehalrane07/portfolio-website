"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play, ShieldCheck, QrCode, BarChart4 } from "lucide-react"
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      title: "Prevention, Classification, and Detection of DDoS Attacks",
      description:
        "Applied deep learning techniques to improve the detection, classification, and prevention of Distributed Denial of Service (DDoS) attacks. Developed models aimed at identifying and mitigating various types of DDoS attacks with high accuracy.",
      tags: ["Deep Learning", "Network Security"],
      link: "http://www.jetir.org/view?paper=JETIR2411579",
      github: null,
      demo: false,
      icon: <ShieldCheck className="h-20 w-20 text-primary" />,
    },
    {
      title: "DevOps QR Code Generator",
      description:
        "Developed a web-based QR code generator that allows users to input a URL and receive a corresponding QR code, which is uploaded to an AWS S3 bucket for storage and retrieval. Containerized with Docker and implemented CI/CD with GitHub Actions.",
      tags: ["DevOps"],
      link: null,
      github: "https://github.com/sehalrane07/devops-qr-code",
      demo: false,
      icon: <QrCode className="h-20 w-20 text-primary" />,
    },
    {
      title: "Healthcare and Sales Data Analysis Dashboard in Power BI",
      description:
        "Built an interactive Power BI dashboard to make complex data easier to understand and drive better decisions. Cleaned, transformed, and connected raw data using Power Query and DAX to uncover useful insights.",
      tags: ["Data Analysis"],
      link: null,
      github: ["https://github.com/sehalrane07/PowerBI-Dashboard", "https://github.com/sehalrane07/sales-dashboard"],
      demo: false,
      icon: <BarChart4 className="h-20 w-20 text-primary" />,
    },
  ]

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((project) => project.tags.includes(activeTab))

  const categories = ["all", "Deep Learning", "Network Security", "DevOps", "Data Analysis"]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg">Explore my recent work and personal projects</p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeTab === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="flex items-center justify-center bg-muted h-64">
                  {project.icon}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && <Badge variant="outline">+{project.tags.length - 3} more</Badge>}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex gap-4 flex-wrap">
                  {project.github &&
                    (Array.isArray(project.github) ? project.github : [project.github]).map((link, i) => (
                      <Button key={i} variant="outline" size="sm" asChild>
                        <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Github className="h-4 w-4 mr-2" />
                          Code {Array.isArray(project.github) && project.github.length > 1 ? i + 1 : ""}
                        </a>
                      </Button>
                    ))}
                  {project.link && (
                    <Button variant="default" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Site
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="secondary" size="sm" className="flex items-center">
                          <Play className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>{project.title} Demo</DialogTitle>
                          <DialogDescription>Interactive preview of the project</DialogDescription>
                        </DialogHeader>
                        <div className="aspect-video bg-muted relative rounded-md overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-muted-foreground">Demo would be embedded here</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
