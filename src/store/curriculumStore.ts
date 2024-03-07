import { api } from "@/lib/axios";
import { create } from "zustand";

interface Profile {
  job: string;
  location: string;
}

interface JobPosition {
  title: string;
  starts_at: Date;
  ends_at: Date | null;
}

interface ProfessionalExperience {
  company: string;
  location: string;
  model: string;
  positions: JobPosition[];
}

interface AcademicExperience {
  title: string;
  location: string;
  university: string;
  starts_at: Date;
  ends_at: Date | null;
}

interface Course {
  tags: string[];
  title: string;
  company: string;
}

interface Language {
  title: string;
  level: string;
}

export interface CurriculumState {
  profile: Profile;
  experiences: ProfessionalExperience[];
  education: AcademicExperience[];
  courses: Course[];
  languages: Language[];

  loadLanguages: () => void;
}

export const useCurriculumStore = create<CurriculumState>((set, get) => {
  return {
    profile: {
      job: "DevOps Engineer @Eldorado",
      location: "São Carlos, São Paulo, Brazil",
    },

    experiences: [
      {
        company: "Instituto de Pesquisas Eldorado",
        location: "Campinas, São Paulo, Brazil",
        model: "Hybrid",
        positions: [
          {
            title: "DevOps Summer Engineer",
            starts_at: new Date("2024-01-01T00:00:00"),
            ends_at: null,
          },
        ],
      },
    ],

    education: [
      {
        title: "Bachelor’s Degree in Information Systems",
        location: "São Carlos, São Paulo, Brasil",
        university: "São Paulo University (USP)",
        starts_at: new Date("2020-03-01T00:00:00"),
        ends_at: null,
      },
    ],

    courses: [
      {
        title: "ReactJS Specialization",
        company: "Rocketseat",
        tags: ["ReactJS", "Typescript"],
      },
    ],

    languages: [],

    loadLanguages: async () => {
      try {
        await api.get("/languages").then((response) =>
          set({
            languages: response.data.languages,
          })
        );
      } catch (err) {
        console.error(err);
      }
    },
  };
});
