import { api } from "@/lib/axios";
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
  loadProjects: () => void;
}

export const useProjectStore = create<ProjectState>((set, get) => {
  return {
    page: 1,
    perPage: 2,
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
    projects: [],

    changePage: (page: number) => {
      set({
        page,
      });
    },

    toggleFilter: (category: string, sub: string) => {
      const { filters } = get();
    },

    loadProjects: async () => {
      await api.get("/projects").then((response) =>
        set({
          projects: response.data.projects,
        })
      );
    },
  };
});
