import { PersonalInfo } from "@/types";

export const personalData: PersonalInfo = {
  name: "Truong Van Phuong",
  title: "AI Engineer & Backend Developer",
  tagline: "Building production AI-powered systems, LLM applications, RAG pipelines, and resilient backend microservices.",
  bio: [
    "AI Engineer with hands-on experience building AI-powered systems, LLM applications, RAG pipelines, and backend services. Strong background in Python, machine learning, information retrieval, and API-driven development, with experience designing and integrating AI solutions for real-world applications.",
    "B.S. in Artificial Intelligence from FPT University (GPA 7.9/10). Experienced in architecting standalone RBAC microservices on vector stores, multi-source Knowledge Routers (Qdrant & LightRAG), agent workflow automations, and deep learning model benchmarking."
  ],
  location: "Da Nang, Vietnam",
  phone: "+84 899899400",
  email: "phuongtv.it275@gmail.com",
  availableForHire: true,
  resumeUrl: "/assets/resume.pdf",
  education: [
    {
      institution: "FPT University",
      degree: "B.S. in Artificial Intelligence",
      period: "08/2021 – 09/2025",
      location: "Da Nang, Vietnam",
      gpa: "7.9/10",
      thesis: "AI-based smart cooking assistant for ingredient recognition and recipe recommendation, combining transformer-based computer vision models with a Retrieval-Augmented Generation (RAG) system."
    }
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/trgphun",
      iconName: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      iconName: "linkedin"
    },
    {
      name: "Email",
      url: "mailto:phuongtv.it275@gmail.com",
      iconName: "mail"
    }
  ],
  stats: [
    { label: "AI & RAG Systems", value: "Production" },
    { label: "FPT University GPA", value: "7.9/10" },
    { label: "Vision Dataset Labeled", value: "14,000+" },
    { label: "GAN SSIM Gain", value: "+64%" }
  ]
};
