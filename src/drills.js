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
		.where('date_added', '>', 'daysAgo')
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

//searchByProduceName('bu');

//paginateProducts(2);

let time = Date.parse('2020-04-28T21:38:42.539Z');
console.log(time);
searchByDate('2020-04-28T21:38:42.539Z');
