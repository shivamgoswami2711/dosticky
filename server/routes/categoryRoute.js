const express = require("express");
const categoryRouter = express.Router();
const {
  newCategory,
  getCategory,
  updateCategory,
  categoryByName,
  deleteCategory,
} = require("../controller/categoryController");
const { isAuthUser, isRoleIsValid } = require("../middleware/auth");
const { singleUpload } = require("../middleware/multer");

categoryRouter.route("/new").post(singleUpload ,isAuthUser,isRoleIsValid("admin", "editor"), newCategory)//done
categoryRouter.route("/").get(categoryByName)//done
categoryRouter.route("/:id")
.get(getCategory)
.patch(singleUpload,isAuthUser,isRoleIsValid("admin", "editor"),updateCategory)
.delete(isAuthUser,isRoleIsValid("admin", "editor"),deleteCategory)//done

module.exports = categoryRouter;
