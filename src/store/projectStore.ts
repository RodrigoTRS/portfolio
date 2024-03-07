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
  filter: string[];
  projects: Project[];

  toggleFilter: (category: string) => void;
  loadProjects: () => void;
  deleteProject: (id: string) => void;
}

export const useProjectStore = create<ProjectState>((set, get) => {
  return {
    filter: [],
    projects: [],

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

    deleteProject: async (id: string) => {
      try {
        await api.delete(`projects/${id}`);
      } catch (err) {
        console.log(err);
      }
    },
  };
});
