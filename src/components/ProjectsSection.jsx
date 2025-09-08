import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Real Estate Website",
    description:
      "FullStack real estate website that uses CRUD. Users can view properties, add/remove favourites, book viewings, etc.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "MongoDB", "Prisma", "Mantine"],
    demoUrl: "https://elite-homes-nu.vercel.app/",
  },
  {
    id: 2,
    title: "Interview Prep Platform",
    description:
      "AI-powered mock interviews with real-time feedback, voice conversations, and personalized questions.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Clerk", "Vapi", "Tailwind", "Firebase"],
    demoUrl: "https://interview-buddy-teal.vercel.app/",
  },
  {
    id: 3,
    title: "Spotify Clone",
    description:
      "A responsive music streaming web app. Users can browse playlists, play/pause tracks, search songs, and create custom playlists.",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind"],
    demoUrl: "https://spotify-clone-kappa-orcin.vercel.app/",
  },
  {
    id: 4,
    title: "Bozza Jobs",
    description:
      "A job platform where users browse jobs, upload CVs, track applications. Employers can manage job posts. Integrated with Cloudinary for uploads.",
    image: "/projects/projectt4.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Vercel"],
    demoUrl: "https://bozza-pl5q.vercel.app/",
  },
  {
    id: 5,
    title: "React Chat App",
    description:
      "Real-time chat application with authentication, private messaging, online status, and notifications. Built with React, Node.js, Express, MongoDB, and Socket.IO.",
    image: "/projects/project5.png", // add a screenshot of your chat app here
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Vercel"],
    demoUrl: "react-chat-app-nqg6.vercel.app/", // your deployed chat app
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each was carefully crafted with
          attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Msiabo"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};