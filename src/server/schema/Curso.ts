import { z as schema } from "zod";

export const cursoSchema = schema.object({
    id: schema.string().uuid(),
    nome: schema.string(),
    created_at: schema.string(),
    edited_at: schema.string(),
});

export type Curso = schema.infer<typeof cursoSchema>;
