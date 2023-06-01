import express from "expres";
import { getUser } from "../controllers/user";
const router = express.Router()


router.get("/find/:userId",getUser);

export default router