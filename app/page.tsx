"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronRight, BarChart2, Zap, Shield, Github, Twitter, Linkedin } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ScrollProgress } from "./components/scroll-progress"
import { AnimatedSection } from "./components/animated-section"
import { ScrollIndicator } from "./components/scroll-indicator"

export default function LandingPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Parallax effect for hero image
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <div className="flex min-h-screen flex-col" ref={ref}>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-teal-500" />
            <span className="text-xl font-bold">StreamLine</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:inline-block">
              Sign In
            </Link>
            <Button className="bg-teal-500 hover:bg-teal-600">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Workflow, Amplify Your Results
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The all-in-one platform that helps teams work smarter, collaborate better, and deliver faster.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-teal-500 hover:bg-teal-600">
                    Start Free Trial
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Watch Demo</Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Check className="mr-1 h-4 w-4 text-teal-500" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-1 h-4 w-4 text-teal-500" />
                    <span>14-day free trial</span>
                  </div>
                </div>
              </motion.div>
              <motion.div style={{ y: heroImageY }}>
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Hero Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
              </motion.div>
            </div>
          </div>
          <ScrollIndicator />
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900 px-3 py-1 text-sm text-teal-700 dark:text-teal-300">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything you need to succeed</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our platform provides all the tools you need to streamline your workflow and boost productivity.
                </p>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <AnimatedSection delay={0.3}>
                <Card>
                  <CardHeader>
                    <BarChart2 className="h-10 w-10 text-teal-500 mb-2" />
                    <CardTitle>Advanced Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Gain valuable insights with our powerful analytics tools. Track performance, identify trends, and
                      make data-driven decisions.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <Card>
                  <CardHeader>
                    <Shield className="h-10 w-10 text-teal-500 mb-2" />
                    <CardTitle>Enterprise Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Keep your data safe with enterprise-grade security. We use the latest encryption and security
                      protocols to protect your information.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.5}>
                <Card>
                  <CardHeader>
                    <Zap className="h-10 w-10 text-teal-500 mb-2" />
                    <CardTitle>Automation Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Automate repetitive tasks and workflows. Save time and reduce errors with our powerful automation
                      tools.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900 px-3 py-1 text-sm text-teal-700 dark:text-teal-300">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by thousands of teams</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Don't just take our word for it. Here's what our customers have to say.
                </p>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <AnimatedSection delay={0.3}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        width={60}
                        height={60}
                        alt="User Avatar"
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-lg font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Marketing Director, TechCorp</p>
                      </div>
                    </div>
                    <blockquote className="mt-4 border-l-2 pl-4 italic">
                      "StreamLine has completely transformed how our marketing team operates. We've cut our campaign
                      launch time in half and improved our collaboration across departments."
                    </blockquote>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        width={60}
                        height={60}
                        alt="User Avatar"
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-lg font-medium">David Chen</p>
                        <p className="text-sm text-muted-foreground">CTO, Innovate Inc.</p>
                      </div>
                    </div>
                    <blockquote className="mt-4 border-l-2 pl-4 italic">
                      "The automation features alone have saved our development team countless hours. The ROI was
                      evident within the first month of implementation."
                    </blockquote>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900 px-3 py-1 text-sm text-teal-700 dark:text-teal-300">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, transparent pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for you and your team.
                </p>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <AnimatedSection delay={0.3}>
                <Card>
                  <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <CardDescription>Perfect for individuals and small teams</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$29</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-teal-500" />
                        <span>Up to 5 team members</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-teal-500" />
                        <span>Basic analytics</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-teal-500" />
                        <span>5GB storage</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-teal-500" />
                        <span>Email support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600">Get Started</Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <Card className="border-teal-500">
                  <CardHeader>
                    <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900 px-3 py-1 text-sm text-teal-700 dark:text-teal-300 mb-2">
                      Most Popular
                    </div>
                    <CardTitle>Professional</CardTitle>
                    <CardDescription>Ideal for growing businesses</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$79</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-teal-500" />
                        <span>Up to 20 team members</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-teal-500" />
                        <span>Advanced analytics</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-teal-500" />
                        <span>20GB storage</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-teal-500" />
                        <span>Priority support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-teal-500" />
                        <span>Advanced automation</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600">Get Started</Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.5}>
                <Card>
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <CardDescription>For large organizations</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$199</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-teal-500" />
                        <span>Unlimited team members</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-teal-500" />
                        <span>Custom analytics</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-teal-500" />
                        <span>Unlimited storage</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-teal-500" />
                        <span>24/7 dedicated support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-teal-500" />
                        <span>Custom integrations</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-500 hover:bg-teal-600">Contact Sales</Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-500 text-white">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to streamline your workflow?</h2>
                <p className="max-w-[900px] md:text-xl">
                  Join thousands of teams already using StreamLine to boost their productivity.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-teal-500 hover:bg-gray-100">
                  Start Free Trial
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-teal-600">
                  Schedule a Demo
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 bg-gray-900 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-teal-500" />
                <span className="text-xl font-bold text-white">StreamLine</span>
              </div>
              <p className="text-sm text-gray-400">
                Streamline your workflow, amplify your results. The all-in-one platform for modern teams.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-teal-500 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-teal-500 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-teal-500 transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-teal-500 transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-teal-500 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-teal-500 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-teal-500 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-teal-500 transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-teal-500 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-teal-500 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-teal-500 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-teal-500 transition-colors">
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} StreamLine. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
