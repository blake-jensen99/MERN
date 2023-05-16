const ProductController = require('../controllers/product.controller');

module.exports = function(app) {
    app.get('/api/product', ProductController.allProducts)
    app.post('/api/product', ProductController.createProduct)
}