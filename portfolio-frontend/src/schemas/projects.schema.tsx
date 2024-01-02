import { z } from "zod";

export const ProjectsSchema = z.object({
  id: z.string(),
  title: z.string(),
  img: z.string().nullable(),
  url: z.string(),
  github: z.string(),
});

export type ProjectsData = z.infer<typeof ProjectsSchema>;
