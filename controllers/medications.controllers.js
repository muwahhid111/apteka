const Medication = require("../models/Medications.model");


module.exports.medicationController = {
  addMed: async (req, res) => {
    try {
      const { name, price, isPrescription, categoryId } = req.body;
      await Medication.create({
        name,
        price,
        isPrescription,
        categoryId,
      });
      res.json("Лекарство добавлено");
    } catch (error) {
      res.json(error.message);
    }
  },
  updateMed: async (req, res) => {
    try {
      const { name, price, isPrescription, categoryId } = req.body;
      const patchMed = await Medication.findByIdAndUpdate(req.params.id, {
        name,
        price,
        isPrescription,
        categoryId,
      });
      res.json(patchMed);
    } catch (error) {
      res.json(error.message);
    }
  },
  dropMed: async (req, res) => {
    try {
      await Medication.findByIdAndDelete(req.params.id);
      res.json("Лекартсво удалено");
    } catch (error) {
      res.json(error);
    }
  },
  //Вывести все
  getMed: async (req, res) => {
    try {
      const get1 = await Medication.find({});
      res.json(get1);
    } catch (error) {
      res.json(error.message);
    }
  },
  //Вывести по категориям
  getMedByCategory: async (req, res) => {
    try {
      const get2 = await Medication.find({ categoryId: req.params.categoryId });
    } catch (error) {
      res.json(error.message);
    }
  },
  getOne: async (req, res) => {
    try {
      const get3 = await Medication.findById(req.params.id);
      res.json(get3);
    } catch (error) {
      res.json(error.message);
    }
  },
};
