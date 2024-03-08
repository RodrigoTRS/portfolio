import { ProjectFormData } from "@/app/(admin)/dashboard/projects/components/Form";
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
  getProject: (id: string) => Project | null;
  createProject: (data: ProjectFormData) => void;
  deleteProject: (id: string) => void;
}

export const useProjectStore = create<ProjectState>((set, get) => {
  return {
    filter: [],
    projects: [],

    getProject: (id: string) => {
      const { projects } = get();

      const project = projects.find((project) => project.id === id);

      if (!project) {
        return null;
      }

      return project;
    },

    toggleFilter: (category: string) => {
      const { filter } = get();

      let newFilter = filter.slice();

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
        const response = await api.get("/projects");
        set({
          projects: response.data.projects,
        });
      } catch (err) {
        console.error(err);
      }
    },

    createProject: async (data: ProjectFormData) => {
      const techArray = data.technologies.replace(" ", "").split(",");
      try {
        const response = await api.post("/projects", {
          category: data.category,
          title: data.title,
          description: data.description,
          technologies: techArray,
          project_url: data.project_url,
          repository_url: data.repository_url,
        });
      } catch (err) {
        console.error(err);
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
