
const express = require("express");
const {postgraphile} = require("postgraphile");

const app = express();

app.use(
    postgraphile(
        process.env.DATABASE_URL || "postgres://postgres:12136039@host:5432/catastro",
        "public",
        {
            watchPg: true,
            graphiql: true,
            enhanceGraphiql:true,
        }
    )
);

app.listen(process.env.PORT || 4000);




