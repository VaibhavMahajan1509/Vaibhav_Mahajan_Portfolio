import careerpilot from "../assets/projects/CareerPilot-AI.png";
import foodOrdering from "../assets/projects/vm-vites.png";
import expenseTracker from "../assets/projects/expense-tracker.png";

export const featuredProject = {
  title: "CareerPilot AI",
  label: "Featured Project",
  status: "Actively Maintained",

  image: careerpilot,

  description:
    "A full-stack MERN application that helps job seekers manage applications, improve resumes, generate cover letters, prepare for interviews, and organize their career journey with AI-powered tools.",

  highlights: [
    "Secure authentication with protected routes",
    "Application tracking dashboard with CRUD operations",
    "AI-powered resume review and feedback",
    "AI cover letter and interview question generation",
  ],

  stack: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Gemini AI",
  ],

  github: "https://github.com/VaibhavMahajan1509/CareerPilot-AI",
  live: "https://career-pilot-ai-drab.vercel.app/",
};

export const projects = [
  {
    title: "Food Ordering App",
    label: "MERN Stack Project",
    status: "Completed",

    image: foodOrdering,

    description:
      "A responsive full-stack food ordering application featuring menu browsing, secure authentication, cart management, and a seamless ordering experience.",

    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    github: "https://github.com/VaibhavMahajan1509/VM_bites",
    live: "https://vm-bites.vercel.app/",
  },

  {
    title: "Expense Tracker",
    label: "React Project",
    status: "Completed",

    image: expenseTracker,

    description:
      "A responsive expense management application for tracking income, expenses, account balance, and transaction history through a clean and intuitive interface.",

    stack: [
      "React",
      "JavaScript",
      "CSS",
    ],

    github: "https://github.com/VaibhavMahajan1509/spendWise",
    live: "https://spend-wise-inky.vercel.app/",
  },
];