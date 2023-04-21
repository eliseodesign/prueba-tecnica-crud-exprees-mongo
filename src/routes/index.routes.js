import { Router } from "express"
import User from "../models/User"

const router = Router()

router.get("/", async (req, res)=>{
  console.log("first")
  const users = await User.find().lean()
  res.render("index", {users: users})

})


router.post("/user/add", async (req, res) => {
  try {
    await User.create(req.body);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear un nuevo usuario");
  }
});




export default router 