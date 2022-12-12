
export const getSearch = async (parameter) => {
	const url = `http://3.23.86.147/server/search`;
	try {
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify( parameter ) 
		});

		console.log( response );
		
	} catch (error) {
		console.log(error);	
	}
}