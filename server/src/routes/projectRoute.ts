import { Router } from "express";
import {
  getProjects,
  createProject,
  getProject,
} from "../controllers/projectController";

const router = Router();

router.get("/", getProjects);
router.get("/project", getProject);
router.post("/", createProject);

export default router;
