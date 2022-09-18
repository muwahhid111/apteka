const { Router } = require('express')
const { usersController } = require('../controllers/users.controllers')

const router = Router()

router.post('/admin/users', usersController.add) 
router.delete('/admin/users/:id', usersController.delete)
router.patch('/admin/users/:id', usersController.update)
router.get('/admin/users', usersController.get)


router.patch('/users/:userId/wallet/add/:money', usersController.topUpWallet)
router.patch('/users/:userId/medicines/:medicamentId/cart/add', usersController.addToCart)
router.patch('/users/:userId/medicines/:medicamentId/cart/delete', usersController.deleteToCart)
router.patch('/users/:userId/cart/buy', usersController.buy)




module.exports = router