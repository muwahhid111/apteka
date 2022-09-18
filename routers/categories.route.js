const { Router } = require("express");
const {
  categoriesController,
} = require("../controllers/caregories.controllers");
const router = Router();

router.post("/admin/categories", categoriesController.addCat);
router.patch("/admin/categories/:id", categoriesController.updateCat);
router.delete("/admin/categories/:id", categoriesController.dropCat);
router.get("/admin/category/:id", categoriesController.getCat);
router.get("/admin/categories", categoriesController.getCat2);

module.exports = router;
