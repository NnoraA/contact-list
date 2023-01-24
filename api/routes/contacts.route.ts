import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response, Router } from "express";
import { prisma } from "..";

export const contactsRoutes = Router();

contactsRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const contacts = await prisma.contact.findMany();

    res.send({ contacts });
  } catch (error) {
    res.status(500).send({
      error: {
        message: `Unexpected error has happened`,
      },
    });
  }
});

contactsRoutes.post("/", async (req: Request, res: Response) => {
  const contact = req.body;

  try {
    const createdContact = await prisma.contact.create({
      data: { ...contact },
    });
    res.send({ createdContact });
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      res.status(400).send({
        error: {
          message: `Unique constraint failed on ${error.meta?.target}`,
        },
      });
    } else {
      res.status(500).send({
        error: {
          message: `Unexpected error has happened`,
        },
      });
    }
  }
});

contactsRoutes.put("/:id", async (req: Request, res: Response) => {
  const contact = req.body;
  const { id } = req.params;

  try {
    const updatedContact = await prisma.contact.update({
      where: {
        id,
      },
      data: { ...contact },
    });

    res.send({ updatedContact });
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      res.status(400).send({
        error: {
          message: `Unique constraint failed on ${error.meta?.target}`,
        },
      });
    } else {
      res.status(500).send({
        error: {
          message: `Unexpected error has happened`,
        },
      });
    }
  }
});

contactsRoutes.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleted = await prisma.contact.deleteMany({
      where: {
        id,
      },
    });

    res.status(204).json({ deleted });
  } catch (error) {
    res.status(500).send({
      error: {
        message: `Unexpected error has happened`,
      },
    });
  }
});
