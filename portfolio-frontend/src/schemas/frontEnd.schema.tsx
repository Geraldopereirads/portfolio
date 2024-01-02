import { z } from "zod";

export const FrontEndSchema = z.object({
  id: z.string(),
  title: z.string(),
  img: z.string().nullable(),
  url: z.string(),
  github: z.string(),
});

export type FrontEndData = z.infer<typeof FrontEndSchema>;
