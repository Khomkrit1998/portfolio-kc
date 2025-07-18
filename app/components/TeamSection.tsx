import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getAllTeamMembers, type TeamMember } from "../lib/team"

interface TeamMemberCardProps {
  member: TeamMember
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  const categoryColors = {
    Frontend: "bg-blue-100 text-blue-800",
    Backend: "bg-green-100 text-green-800",
    Marketing: "bg-orange-100 text-orange-800",
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
      <CardHeader className="text-center">
        <div className="relative mx-auto mb-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={80}
              height={80}
              className="rounded-full border-4 border-white shadow-lg transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        <CardTitle className="text-lg font-bold text-gray-900">{member.name}</CardTitle>
        <CardDescription className="text-sm font-medium text-gray-600">{member.role}</CardDescription>
        <Badge variant="secondary" className={`text-xs ${categoryColors[member.category]} mt-2`}>
          {member.category}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 text-center leading-relaxed">{member.bio}</p>

        <div className="flex flex-wrap gap-1 justify-center">
          {member.skills.slice(0, 4).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
              {skill}
            </Badge>
          ))}
          {member.skills.length > 4 && (
            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
              +{member.skills.length - 4}
            </Badge>
          )}
        </div>

        <div className="flex justify-center space-x-3 pt-2">
          {member.social.github && (
            <Link
              href={member.social.github}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </Link>
          )}
          {member.social.linkedin && (
            <Link
              href={member.social.linkedin}
              className="text-gray-400 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          )}
          {member.social.twitter && (
            <Link
              href={member.social.twitter}
              className="text-gray-400 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-4 w-4" />
            </Link>
          )}
          {member.social.email && (
            <Link href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-red-500 transition-colors">
              <Mail className="h-4 w-4" />
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function TeamSection() {
  const allMembers = getAllTeamMembers()

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Talented professionals working together to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {allMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
