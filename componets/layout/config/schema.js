import { createPostGraphileSchema } from "postgraphile-core";


createPostGraphileSchema(process.env.DATABASE_URL || 'postgres://postgres:12136039@host:5432/catastro').then(schema => {})