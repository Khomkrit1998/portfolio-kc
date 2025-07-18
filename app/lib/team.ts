export interface TeamMember {
  id: string
  name: string
  role: string
  category: "Frontend" | "Backend" | "Marketing"
  image: string
  bio: string
  skills: string[]
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export const teamMembers: TeamMember[] = [
  // Frontend Team
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Senior Frontend Developer",
    category: "Frontend",
    image: "/placeholder-user.jpg",
    bio: "Passionate about creating beautiful and intuitive user interfaces with React and modern web technologies.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "sarah@portfolio.com",
    },
  },
  {
    id: "2",
    name: "Alex Chen",
    role: "UI/UX Designer & Frontend Developer",
    category: "Frontend",
    image: "/placeholder-user.jpg",
    bio: "Bridging the gap between design and development with a focus on user experience and accessibility.",
    skills: ["Vue.js", "CSS3", "SASS", "Adobe Creative Suite", "Framer"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  // Backend Team
  {
    id: "3",
    name: "Michael Rodriguez",
    role: "Lead Backend Developer",
    category: "Backend",
    image: "/placeholder-user.jpg",
    bio: "Expert in building scalable server-side applications and designing robust database architectures.",
    skills: ["Node.js", "Python", "PostgreSQL", "AWS", "Docker"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "michael@portfolio.com",
    },
  },
  {
    id: "4",
    name: "Emily Davis",
    role: "DevOps Engineer",
    category: "Backend",
    image: "/placeholder-user.jpg",
    bio: "Specializing in cloud infrastructure, CI/CD pipelines, and ensuring high availability systems.",
    skills: ["Kubernetes", "Terraform", "Jenkins", "MongoDB", "Redis"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  // Marketing Team
  {
    id: "5",
    name: "David Kim",
    role: "Digital Marketing Manager",
    category: "Marketing",
    image: "/placeholder-user.jpg",
    bio: "Driving growth through data-driven marketing strategies and compelling brand storytelling.",
    skills: ["SEO", "Google Analytics", "Content Strategy", "Social Media", "PPC"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "david@portfolio.com",
    },
  },
  {
    id: "6",
    name: "Lisa Thompson",
    role: "Content Marketing Specialist",
    category: "Marketing",
    image: "/placeholder-user.jpg",
    bio: "Creating engaging content that connects with audiences and drives meaningful engagement.",
    skills: ["Content Writing", "Copywriting", "Email Marketing", "Brand Strategy", "Analytics"],
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
]

export function getTeamByCategory(category: TeamMember["category"]): TeamMember[] {
  return teamMembers.filter((member) => member.category === category)
}

export function getAllTeamMembers(): TeamMember[] {
  return teamMembers
}
