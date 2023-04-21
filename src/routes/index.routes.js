import { Router } from "express"

const router = Router()

router.get("/", async (req, res)=>{
  console.log("first")
  res.render("index")

})

router.get("/dashboard", async (req, res)=>{
  console.log("first")
  res.render("dashboard")

})



export default router 