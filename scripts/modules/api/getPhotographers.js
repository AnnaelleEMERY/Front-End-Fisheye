// get the data out of the API
async function getPhotographers() {
    try {
        const response = await fetch('../data/photographers.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export default getPhotographers;