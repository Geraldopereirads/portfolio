import { z } from "zod";

export const WordPressSchema = z.object({
  id: z.string(),
  title: z.string(),
  img: z.string().nullable(),
  url: z.string(),
  github: z.string(),
});

export type WordPressData = z.infer<typeof WordPressSchema>;
