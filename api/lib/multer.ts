import multer from "multer";
import { extname, parse } from "path";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, "uploads/"),

  filename: (req, file, cb) => {
    cb(
      null,
      `${parse(file.originalname).name}__${Date.now()}__${extname(
        file.originalname
      )}`
    );
  },
});

export const upload = multer({ storage: storage });
