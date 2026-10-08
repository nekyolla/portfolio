import { Profile } from "@/types";

export const profile: Profile = {
  name: "Abdillah Muharrarul",
  nickname: "Nekyolla",
  title: "Informatics Engineering Student",
  university: "Universitas Airlangga",
  program: "D4 Informatics Engineering",
  email: "abdillah.muharrarul911@gmail.com",
  github: "https://github.com/nekyolla",
  linkedin: "https://linkedin.com/in/nekyolla-ya-5a61393b4",
  instagram: "https://instagram.com/nekyolla",
  bio: "I build backends and data pipelines that hold up in real use: role-based APIs, cloud telemetry, and market-basket analysis. Working toward a career as an ML engineer.",
  aboutMe: `Following the Path of the Trailblazer, I believe growth comes from constantly exploring new frontiers, whether that's a new algorithm, a new framework, or a new way of thinking.

As an Informatics Engineering student at Universitas Airlangga, I'm particularly interested in Data Science, Machine Learning, and Artificial Intelligence, with a solid foundation in backend development.

My long-term vision is simple: stay curious, keep learning, and turn that knowledge into AI solutions that create tangible, measurable impact. One step, one trail, at a time.`,
  roles: ["Backend Engineer", "Machine Learning", "Data Science"],
  focusAreas: [
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Backend Engineering",
    "Cloud Computing",
  ],
  interests: "Data Science, Machine Learning & AI",
  tagline:
    "Informatics Engineering student and aspiring ML Engineer, building impactful software through curiosity and continuous learning.",
  profileImage: "/images/profile/photo.jpg",
  profileImageAlt: "Abdillah sitting on a rocky mountain ridge above the clouds",
  cvFile: "/cv/cv.pdf",
  location: "Surabaya, East Java, Indonesia",
  siteUrl: "https://nekyollas-portfolio.vercel.app",
};

// The hero bio is written in first person; search results and link previews also need to say who this is.
export const siteDescription = `${profile.title} at ${profile.university}. ${profile.bio}`;
