const ProductController = require('../controllers/product.controller');

module.exports = function(app) {
    app.get('/api/product', ProductController.allProducts)
    app.get('/api/product/:id', ProductController.getOne)
    app.post('/api/product', ProductController.createProduct)
    app.patch('/api/product/:id', ProductController.updateOne)
    app.delete('/api/product/:id', ProductController.deleteProduct)
}