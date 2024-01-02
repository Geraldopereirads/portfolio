import { z } from "zod";

export const BackEndSchema = z.object({
  id: z.string(),
  title: z.string(),
  img: z.string().nullable(),
  url: z.string(),
  github: z.string(),
});

export type BackEndData = z.infer<typeof BackEndSchema>;
