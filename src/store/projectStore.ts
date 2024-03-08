import { CreateProjectFormData } from "@/app/(admin)/dashboard/projects/components/Form";
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
  createProject: (data: CreateProjectFormData) => void;
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
      try {
        await api.get("/projects").then((response) =>
          set({
            projects: response.data.projects,
          })
        );
      } catch (err) {
        console.error(err);
      }
    },

    createProject: async (data: CreateProjectFormData) => {
      const techArray = data.technologies.replace(" ", "").split(",");
      try {
        await api.post("/projects", {
          category: data.category,
          title: data.title,
          description: data.description,
          technologies: techArray,
          repository_url: data.repository_url,
          project_url: data.project_url,
        });
      } catch (err) {
        console.log(err);
      }
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
