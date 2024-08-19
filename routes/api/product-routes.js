const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// GET /api/products - Get all products
router.get('/', async (req, res) => {
  try {
    // Fetch all products and include associated Category and Tag models
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });

    // If no products are found, return an appropriate message
    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }

    // Send the fetched products
    res.status(200).json(products);
  } catch (err) {
    // Log the error and return a generic server error message
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
