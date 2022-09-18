const {Router} = require('express');
const {medicationController} = require('../controllers/medications.controllers');
const router = Router();

router.post('/admin/medicines', medicationController.addMed);
router.patch('/admin/medicines/:id', medicationController.updateMed);
router.delete('/admin/medicines/:id', medicationController.dropMed);
router.get('/admin/medicines', medicationController.getMed);
router.get('user/medicines/:id', medicationController.getOne);
router.get('/user/medicines/category/:id', medicationController.getMedByCategory);
router.get('/user/medicines', medicationController.getMed);



module.exports = router;