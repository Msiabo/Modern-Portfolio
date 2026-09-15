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
      "A job platform where users browse jobs, upload CVs, track applications. Employers can manage job posts with Cloudinary integration for file uploads.",
    image: "/projects/project4.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Vercel",
    ],
    demoUrl: "https://bozza-pl5q.vercel.app/",
  },
  {
    id: 5,
    title: "React Chat App",
    description:
      "Real-time chat application with authentication, private messaging, online status, and notifications.",
    image: "/projects/project5.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Vercel",
    ],
    demoUrl: "https://react-chat-app-nqg6.vercel.app/",
  },
  {
    id: 6,
    title: "MERN Expense Tracker",
    description:
      "FullStack expense tracker application with authentication, income and expense management, charts, Cloudinary uploads, financial goals, and Excel record downloads.",
    image: "/projects/project6.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Vercel",
    ],
    demoUrl: "https://mern-expense-tracker-wheh.vercel.app/",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description:
      "My first developer portfolio website showcasing projects, skills, and contact details with a focus on responsive design and smooth animations.",
    image: "/projects/project7.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://portfolio-xi-eosin-56.vercel.app/",
  },

  // ==========================================
  // NEW PROJECTS
  // ==========================================

  {
    id: 8,
    title: "FarmView Guest House",
    description:
      "A full-stack hospitality management and guest booking platform for FarmView Guest House. The system includes online accommodation and venue bookings, conference and event services, an admin dashboard, booking management, guest information, rooms, halls, gallery management, and payment tracking.",
    image: "/projects/project8.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    demoUrl: "https://farm-view-ddi1.vercel.app/",
  },

  {
    id: 9,
    title: "Tshego's Nail Salon",
    description:
      "A modern and responsive nail salon website designed to showcase nail services, pricing, gallery work, and business information while giving customers an easy way to explore and book salon services.",
    image: "/projects/project9.png",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    demoUrl: "https://tshego-flax.vercel.app/",
  },

  {
    id: 10,
    title: "The Craftsman Arts",
    description:
      "A creative business website designed to showcase artwork, handcrafted products, artistic services, and a visual gallery. The platform focuses on presenting the brand, highlighting creative work, and creating a professional online presence.",
    image: "/projects/project10.png",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    demoUrl: "https://the-craftman-arts-xi.vercel.app/",
  },

  {
    id: 11,
    title: "ADHOPE",
    description:
      "A modern and responsive nonprofit organization website for African Diaspora Hope. The website presents the organization's mission, programs, community impact, stories, partners, and contact information through a professional single-page design focused on accessibility, visual storytelling, and community engagement.",
    image: "/projects/adhope.png",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "React Icons",
      "Responsive Design",
    ],
    demoUrl: "https://ad-hope.vercel.app/",
  },
];
export default projects;


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