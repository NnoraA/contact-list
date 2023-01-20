import { Request, Response } from "express";
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const port = process.env.PORT;

const app = express();

app.get("/test", async (req: Request, res: Response) => {
  const users = await prisma.contact.findMany();
  console.log(users);
  res.send({ data: "Hello!!" });
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
