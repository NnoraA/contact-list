import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { PrismaClient } from "@prisma/client";
import { contactsRoutes } from "./routes/contacts.route";
import cors from "cors";
import { join } from "path";

export const prisma = new PrismaClient();

const port = process.env.PORT;

const app = express();
app.use(express.static(join(__dirname, "uploads")));
app.use(cors());

app.use(express.json());

app.use("/contacts", contactsRoutes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
