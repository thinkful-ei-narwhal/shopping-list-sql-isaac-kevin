const knexInstance = require('./practice');

function searchByProduceName(searchTerm) {
	knexInstance
		.select('*')
		.from('shopping_list')
		.where('name', 'ILIKE', `%${searchTerm}%`)
		.then((result) => {
			console.log(result);
		});
}

function searchByDate(daysAgo) {
	knexInstance
		.select('*')
		.from('shopping_list')
		.where('date_added',
					 '>',
					 knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
		)
		.then((result) => {
			console.log(result);
		});
}

function paginateProducts(page) {
	const productsPerPage = 6;
	const offset = productsPerPage * (page - 1);
	knexInstance
		.select('*')
		.from('shopping_list')
		.limit(productsPerPage)
		.offset(offset)
		.then((result) => {
			console.log(result);
		});
}

function getTotalCost() {
	knexInstance
		.select('category')
		.sum('price AS total_price')
		.from('shopping_list')
		.groupBy('category')
		.then(result => {
			console.log(result)
		})
}

//searchByProduceName('bu');

//paginateProducts(2);

//searchByDate(1);

getTotalCost();
