const AbstractSeeder = require('./AbstractSeeder');

class CategorySeeder extends AbstractSeeder {
    constructor() {
        super({ table: 'category', truncate: true });
    }

    run() {
        const categories = [{name: 'Comédie'}, {name: 'Thriller'}, {name: 'Horreur'}];
        categories.forEach((category) => {
            const categoryWithRefName = {
                ...category,
                refName: `category_${category.name}`,
            };
            this.insert(categoryWithRefName);
        });
    }
}

module.exports = CategorySeeder;