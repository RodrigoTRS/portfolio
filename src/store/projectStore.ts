import { create } from "zustand";

interface Category {
  title: string;
  sub: string[];
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "Front-end" | "Back-end" | "Full stack";
  created_at: Date;
  repository_url: string;
  project_url: string;
}

export interface ProjectState {
  page: number;
  perPage: number;
  filters: Category[];
  categories: Category[];
  projects: Project[];

  changePage: (page: number) => void;
  toggleFilter: (category: string, sub: string) => void;
}

export const useProjectStore = create<ProjectState>((set, get) => {
  return {
    page: 1,
    perPage: 4,
    filters: [],
    categories: [
      {
        title: "Project type",
        sub: ["Website", "Landing Page"],
      },
      {
        title: "Category",
        sub: ["Front-end", "Back-end", "Full stack"],
      },
      {
        title: "Tech",
        sub: ["Node.js", "React.js", "Next.js"],
      },
    ],
    projects: [
      {
        id: "2f6bbc20-a7b5-4cac-87de-1d7386c7d8cf",
        title: "Ignite call",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        technologies: ["React.js", "Next.js", "Node.js", "AuthO"],
        category: "Front-end",
        created_at: new Date(),
        repository_url: "http://localhost:3000/",
        project_url: "http://localhost:3000/",
      },
      {
        id: "a3d7995f-88ae-4d8b-bc0d-b637d26be55d",
        title: "Ignite call",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        technologies: ["React.js", "Next.js", "Node.js", "AuthO"],
        category: "Front-end",
        created_at: new Date(),
        repository_url: "http://localhost:3000/",
        project_url: "http://localhost:3000/",
      },
      {
        id: "b5031ea6-e0b2-47ac-b353-75fb0ed17483",
        title: "Ignite call",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        technologies: ["React.js", "Next.js", "Node.js", "AuthO"],
        category: "Front-end",
        created_at: new Date(),
        repository_url: "http://localhost:3000/",
        project_url: "http://localhost:3000/",
      },
    ],

    changePage: (page: number) => {
      set({
        page,
      });
    },

    toggleFilter: (category: string, sub: string) => {
      const { filters } = get();
    },
  };
});
