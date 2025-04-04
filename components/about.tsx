"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, BarChart, Briefcase } from "lucide-react"
import Image from "next/image"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      category: "Programming",
      icon: <Code className="h-6 w-6 text-primary" />,
      items: ["Java", "Python", "SQL"],
    },
    {
      category: "Data Analysis",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      items: ["MS Excel", "PowerBI", "Tableau", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    },
    {
      category: "Databases",
      icon: <Database className="h-6 w-6 text-primary" />,
      items: ["MySQL"],
    },
    {
      category: "Other Tools",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      items: ["Git", "GitHub", "Jupyter Notebook", "AWS (EC2, S3, ECS)", "Docker", "Kubernetes"],
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="https://avatars.githubusercontent.com/u/162272932?s=400&u=9317ca841dfb730cca8738bb014bb14c54d339bd&v=4" alt="Profile" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-2"
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-lg mb-6">
              I'm a Computer Engineering student with a strong passion for data analysis and DevOps. I love working with data—cleaning, transforming, and uncovering insights that drive meaningful decisions. At the same time, I enjoy automating workflows and optimizing infrastructure to make systems more efficient and scalable.
            </p>
            <p className="text-lg mb-6">
              My technical expertise includes Python and Java, data visualization tools like Power BI and Tableau, and cloud platforms like AWS. Whether it's designing dashboards that simplify complex data or setting up CI/CD pipelines for seamless deployments, I thrive on solving real-world challenges through technology.
            </p>
       {/*     <p className="text-lg">
              I'm constantly learning and adapting to new technologies, with a particular interest in cybersecurity and
              machine learning applications. When I'm not coding, I participate in hackathons and contribute to
              technical events at my college.
            </p> */}
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl font-semibold text-center mb-10"
          >
            My Skills
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {skill.icon}
                      <h3 className="text-xl font-semibold ml-2">{skill.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {skill.items.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

