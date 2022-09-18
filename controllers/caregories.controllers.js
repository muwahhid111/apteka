const Category = require("../models/Category.model");

module.exports.categoriesController = {
  addCat: async (req, res) => {
    try {
      const { nameCategory } = req.body;
      await Category.create({
        nameCategory,
      });
      res.json("Категория добавлена");
    } catch (error) {
      res.json(error.message);
    }
  },
  updateCat: async (req, res) => {
    try {
      const { nameCategory } = req.body;
      const upCat = await Category.findByIdAndUpdate(req.params.id, {
        nameCategory,
      });
      res.json(upCat);
    } catch (error) {
      res.json(error.message);
    }
  },
  dropCat: async (req, res) => {
    try {
        await Category.findOneAndDelete(req.params.id);
        res.json('Категория удалена')
    } catch (error) {
      res.json(error.message);
    }
  },
  //Вывести одну категорию
  getCat: async (req, res) => {
    try {
        const getCategory = await Category.findById(req.params.id);
        res.json(getCategory)
    } catch (error) {
      res.json(error.message);
    }
  },
  //Вывести все категории
  getCat2: async (req, res) => {
    try{
     const getCategory2 = await Category.find({});
     res.json(getCategory2)
    }catch(error){
        res.json(error)
    }
  }
};
