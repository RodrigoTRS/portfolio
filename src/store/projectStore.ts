import { api } from "@/lib/axios";
import { create } from "zustand";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  created_at: Date;
  repository_url: string;
  project_url: string;
}

export interface ProjectState {
  page: number;
  perPage: number;
  filter: string[];
  projects: Project[];

  changePage: (page: number) => void;
  toggleFilter: (category: string) => void;
  loadProjects: () => void;
}

export const useProjectStore = create<ProjectState>((set, get) => {
  return {
    page: 1,
    perPage: 4,
    filter: [],
    projects: [],

    changePage: (page: number) => {
      set({
        page,
      });
    },

    toggleFilter: (category: string) => {
      const { filter } = get();

      let newFilter = filter;

      const isFiltered = newFilter.includes(category);

      if (isFiltered) {
        newFilter = newFilter.filter((item) => item !== category);
      } else {
        newFilter.push(category);
      }

      set({
        page: 1,
        filter: newFilter,
      });
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
