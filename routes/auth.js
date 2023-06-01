import express from "expres";
import {register,login,logout} from "../controllers/auth";
const router = express.Router()

router.post("register",register)
router.post("login",login)
router.post("logout",logout)


export default router