import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "NovaBank",
    subtitle: "Home Banking Dashboard",
    description:
      "Frontend-only fintech dashboard inspirado en aplicaciones como Mercado Pago, Nubank y Revolut. Desarrollado con foco en UI premium, animaciones y experiencia de usuario.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/ValentinCoccimiglio/NovaBankPro",
    liveUrl: "https://nova-bank-pro.vercel.app/",
    image: "/images/nobank.png",
    featured: true,
  },
];
