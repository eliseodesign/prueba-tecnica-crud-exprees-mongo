import { Router } from "express";
import User from "../models/User";

const router = Router();

router.get("/", async (req, res) => {
  console.log("first");
  const users = await User.find().lean();
  res.render("index", { users: users });
});

router.post("/user/add", async (req, res) => {
  try {
    const users = await User.find().lean();
    const idUser = Math.max(users.map((u) => u.idUser)) + 1;

    await User.create({ idUser, ...req.body });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear un nuevo usuario");
  }
});

router.put("/user/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { idUser: req.params.id },
      req.body
    );
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar el usuario");
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ idUser: req.params.id });
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar el usuario");
  }
});


router.get("/edit/:id", async (req, res) => {
  try {

    const user = await User.findById(req.params.id).lean()
    console.log(user)

    res.render("edit", {user:user});
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al editar usuario");
  }
});


router.post("/edit/:id", async (req, res) => {
  try {
    const {id} = req.params;
    await User.findByIdAndUpdate(id, req.body).lean()
    console.log(req.params.body);


    res.redirect("/")
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear un nuevo usuario");
  }
});




export default router;
