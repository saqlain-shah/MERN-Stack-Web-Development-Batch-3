import express from "express"
import  {UserUpdate, deleteUser, getUser, getUsers}  from "../MyControllers/UserControllers.js";
import { verifyUser, verifyToken, verifyAdmin } from "../Utilities/Verifyusers.js";


const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in");
  });
  
  router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete your account");
  });
  
  router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("hello admin, you are logged in and you can delete all accounts");
  });


//UPDATE USER
router.put("/:id", verifyUser,  UserUpdate);
//DELETE USER
router.delete("/:id", verifyUser, deleteUser)
//GET USER
router.get("/:id", verifyUser,  getUser);
//GET USERS
router.get("/", verifyAdmin, getUsers);




export default router;