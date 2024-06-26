const tables = require('../../database/tables');

// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions
const browse = async (req, res) => {
  const categoriesFromDB = await tables.category.readAll();
  res.json(categoriesFromDB)

  // if (req.query.q != null) {
  //   const filteredCategories = categories.filter((category) =>
  //     category.name.toLowerCase().includes(req.query.q.toLowerCase())
  //   );
  //   res.json(filteredCategories);
  // } else res.json(categories);
};

const read = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);

  const category = categories.find((p) => p.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

/* Here you code */

// Export them to import them somewhere else

module.exports = {
  browse,
  read,
};
