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


router.get("/user/:id/edit", renderEdit);


router.post("/user/:id/edit", renderEditUpdate);


router.get("/user/:id/delete", deleteUserId);


export default router;
