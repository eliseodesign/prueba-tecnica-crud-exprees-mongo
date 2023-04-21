import { Router } from "express";
const router = Router();
import {renderUser,
        renderEdit,
        sendUser,
        deleteUser,
        updateUser,
        deleteUserId,
        renderEditUpdate
      } from '../controllers/user.controller'


router.get("/", renderUser);

router.post("/user/add", sendUser);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);


router.get("/edit/:id", renderEdit);


router.post("/edit/:id", renderEditUpdate);


router.get("/delete/:id", deleteUserId);


export default router;
