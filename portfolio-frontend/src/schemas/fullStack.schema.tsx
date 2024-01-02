import { z } from "zod";

export const FullSktacSchema = z.object({
  id: z.string(),
  title: z.string(),
  img: z.string().nullable(),
  url: z.string(),
  github: z.string(),
});

export type FullSktacData = z.infer<typeof FullSktacSchema>;
