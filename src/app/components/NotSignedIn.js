import { IconAi, IconArticle, IconClock, IconPhoto, IconSettings, IconShare, IconSpeedboat, IconTimeDuration0 } from "@tabler/icons-react";
import { FeaturesSectionDemo } from "./ui/FeaturedSectionDemo";
import { AnimatedTestimonials } from "./ui/animated-testimoinals";
import { BackgroundLines } from "./ui/background-lines";
import { SignUpButton } from "@clerk/clerk-react";

function NotSignedIn() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/public/compress-cats/1.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/public/compress-cats/1.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/public/compress-cats/1.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: "/public/compress-cats/1.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/public/compress-cats/1.jpg",
    },
  ];
  const features = [
    {
      title: "Read through blogs",
      description:
        "Wanna read book when you're out? try purplenight",
      icon: <IconArticle />,
    },
    {
      title: "AI Crafted",
      description:
        "No random content properly picked by AI, Important parts",
      icon: <IconAi />,
    },
    {
      title: "No time for Books?",
      description:
        "Only ready important parts of books, for the serious book readers",
      icon: <IconClock />,
    },
    {
      title: "2 Minutes",
      description: "On average blog take 2 min to read, not a summary app.",
      icon: <IconSpeedboat />,
    },
    {
      title: "Easy content Sharing",
      description: "Share the blogs that you've create generated with AI with public",
      icon: <IconShare />,
    },
    {
      title: "Interative Thumbnails",
      description:
        "Interactive thumbnails for your blogs, based on content",
      icon: <IconPhoto />,
    },
    {
      title: "Immediate Generation",
      description:
        "Do not take more than 2 minutes to generate content for a book.",
      icon: <IconTimeDuration0 />,
    },
    {
      title: "Adjustable to the Needs",
      description: "Provides a way to tweak to your preferences",
      icon: <IconSettings />,
    },
  ];

  return (
    <>
      <SignUpButton />
      <BackgroundLines className="h-screen flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Purplenight Is Compatible With, <br /> All The Books Out There.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          A very new way of approaching book reading, experience purplenight, through blogs.
        </p>
      </BackgroundLines>
      <FeaturesSectionDemo features={features} />
      <AnimatedTestimonials testimonials={testimonials} />
    </>
  )
}

export default NotSignedIn;