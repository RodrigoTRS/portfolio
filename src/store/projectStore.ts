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

interface Filter {
  type: string;
  filters: string[];
}

export interface ProjectState {
  page: number;
  perPage: number;
  filters: Filter[];
  categories: Category[];
  projects: Project[];

  changePage: (page: number) => void;
  toggleFilter: (category: string, sub: string) => void;
  loadProjects: () => void;
}

export const useProjectStore = create<ProjectState>((set, get) => {
  return {
    page: 1,
    perPage: 4,
    filters: [],
    categories: [
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

      const filteredCategory = filters.find((item) => item.type === category);

      if (!!filteredCategory) {
        // Categoria filtrada existe
        const isSubFiltered = filteredCategory.filters.find(
          (item) => item === sub
        );

        if (!!isSubFiltered) {
          // Sub filtrada existe
          filteredCategory.filters.filter((item) => item === sub);

          if (filteredCategory.filters.length === 0) {
            // Remover categoria
            filters.filter((item) => item.type === category);
          }
        } else {
          // Sub filtrada não existe
          filteredCategory.filters.push(sub);
        }
      } else {
        filters.push({
          type: category,
          filters: [sub],
        });
      }

      console.log(filters);

      set({
        filters,
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
