import { Profile } from "@/types";

export const profile: Profile = {
  name: "Abdillah Muharrarul",
  nickname: "Nekyolla",
  title: "Informatics Engineering Student",
  university: "Universitas Airlangga",
  program: "D4 Informatics Engineering",
  email: "abdillah.muharrarul911@gmail.com",
  github: "https://github.com/nekyolla",
  linkedin: "https://www.linkedin.com/in/abdillah-muharrarul",
  instagram: "https://instagram.com/nekyolla",
  bio: "I build ML models and the systems around them, from IndoBERT text classification to role-based APIs and cloud telemetry. AWS Certified AI Practitioner, currently a Software Developer Intern at Indonesia's Ministry of Home Affairs.",
  aboutMe: `Following the Path of the Trailblazer, I believe growth comes from constantly exploring new frontiers, whether that's a new algorithm, a new framework, or a new way of thinking.

As an Informatics Engineering student at Universitas Airlangga and an AWS Certified AI Practitioner, I'm particularly interested in Machine Learning, NLP and Artificial Intelligence, with hands-on experience across full-stack web development, backend systems and cloud deployment. I'm currently interning as a Software Developer at Kementerian Dalam Negeri (Indonesia's Ministry of Home Affairs).

My long-term vision is simple: stay curious, keep learning, and turn that knowledge into AI solutions that create tangible, measurable impact. One step, one trail, at a time.`,
  roles: ["Machine Learning", "Backend Engineer", "Full-Stack Developer"],
  focusAreas: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Data Science",
    "Backend Engineering",
    "Cloud Computing",
  ],
  interests: "Machine Learning, NLP & AI",
  tagline:
    "Informatics Engineering student and aspiring ML Engineer, building impactful software through curiosity and continuous learning.",
  profileImage: "/images/profile/photo.jpg",
  profileImageAlt: "Abdillah sitting on a rocky mountain ridge above the clouds",
  cvFile: "/cv/cv.pdf",
  location: "Malang, East Java, Indonesia",
  siteUrl: "https://portfolio-astral-express.vercel.app",
};

// The hero bio is written in first person; search results and link previews also need to say who this is.
export const siteDescription = `${profile.title} at ${profile.university}. ${profile.bio}`;
