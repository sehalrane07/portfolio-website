"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const workExperience = [
    {
      company: "Elite Softwares",
      location: "Pune, India",
      position: "Data Analyst Intern",
      period: "Dec 2023 – Jan 2024",
      responsibilities: [
        "Analyzed large datasets to extract valuable insights and provide actionable recommendations.",
        "Created data visualizations using PowerBI to present findings in an easily understandable format for stakeholders.",
        "Cleaned and pre-processed raw data using Python (Pandas, NumPy) to ensure accuracy and consistency.",
        "Assisted in building predictive models using machine learning algorithms (Scikit-learn) to forecast business outcomes.",
      ],
      technologies: ["Python", "PowerBI", "Pandas", "NumPy", "Scikit-learn"],
    },
  ]

  const education = [
    {
      institution: "Sinhgad Institute of Technology Science",
      location: "Pune, India",
      degree: "Bachelor of Engineering (Computer Engineering)",
      period: "2021-2025",
      details: "CGPA: 7.51",
    },
    {
      institution: "Baheti Arts, Science and Commerce College",
      location: "Jalgaon, India",
      degree: "HSC (Maharashtra State Board)",
      period: "2019-2021",
      details: "",
    },
    {
      institution: "St. Lawrence High School",
      location: "Jalgaon, India",
      degree: "SSC (Maharashtra State Board)",
      period: "2006-2019",
      details: "",
    },
  ]

  const certifications = [
    {
      title: "Data Analysis and Visualization with Power BI",
      issuer: "Microsoft",
      date: "2023",
      link: "https://coursera.org/verify/5CTNMHZEHXXC",
    },
    {
      title: "Python for Data Science, AI, and Development",
      issuer: "IBM",
      date: "2023",
      link: "https://coursera.org/verify/96YTUALLD52T",
    },
    {
      title: "AWS Fundamentals",
      issuer: "AWS",
      date: "2023",
      link: "https://coursera.org/verify/specialization/C957NGZJH4QH",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg">My professional journey and educational background</p>
        </motion.div>

        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="work">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="work">
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <CardTitle className="text-xl">{job.position}</CardTitle>
                          <CardDescription className="text-lg font-medium mt-1">
                            {job.company} • {job.location}
                          </CardDescription>
                        </div>
                        <div className="mt-2 md:mt-0 text-sm text-muted-foreground">{job.period}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 list-disc pl-5 mb-4">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {job.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div>
                          <CardTitle>{edu.institution}</CardTitle>
                          <CardDescription>{edu.location}</CardDescription>
                        </div>
                        <div className="mt-2 md:mt-0 text-sm text-muted-foreground">{edu.period}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium">{edu.degree}</p>
                      <p className="mt-2 text-muted-foreground">{edu.details}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <CardDescription>
                        {cert.issuer} • {cert.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        View Certificate
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

