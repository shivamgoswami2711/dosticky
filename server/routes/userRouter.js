const express = require("express");
const loginRouter = express.Router();
const { newUser,login,getUser,updateUser,deleteUser,logOut,forgetPassword,updateUserRole} = require("../controller/userController");
const { isAuthUser, isRoleIsValid } = require("../middleware/auth");

loginRouter.route("/new").post(newUser);
loginRouter.route("/login").post(login);
loginRouter.route("/:id").get(isAuthUser, getUser);
loginRouter.route("/update/:id").patch(isAuthUser, updateUser);
loginRouter.route("/update/role/:id").patch(isAuthUser,isRoleIsValid("admin"), updateUserRole);
loginRouter.route("/delete/:id").delete(isAuthUser, deleteUser);
loginRouter.route("/logout").post(isAuthUser,logOut);
loginRouter.route("/forget/:id").post(forgetPassword);

module.exports = loginRouter;

