import express from "express";
import { signIn, signUp} from "../controller/auth.js"

const router = express.Router();

router.post("/sign_up", signUp);
router.post("/sign_in", signIn);

export default router;