const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve tags', error: err });
  }
});

// Get a single tag by id
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve tag', error: err });
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    // Exclude `id` from req.body to let Sequelize handle it automatically
    const { tag_name } = req.body;
    const tag = await Tag.create({ tag_name });
    res.status(201).json(tag);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create tag', error: err });
  }
});

// Update a tag by id
router.put('/:id', async (req, res) => {
  try {
    // Exclude `id` from req.body to prevent overriding the primary key
    const [updated] = await Tag.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated === 0) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    const updatedTag = await Tag.findByPk(req.params.id);
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update tag', error: err });
  }
});

// Delete a tag by id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Tag.destroy({
      where: { id: req.params.id },
    });

    if (deleted === 0) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete tag', error: err });
  }
});

module.exports = router;
