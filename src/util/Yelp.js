const apiKey = ''
// if cors error, go to https://cors-anywhere.herokuapp.com/corsdemo
const Yelp = {
    search(term, location, sortBy) { // retrieves search results from api
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: { // API can be found at https://www.yelp.com/developers/documentation/v3/get_started
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json() // converts response to json format
        }).then(jsonResponse => {
            console.log(jsonResponse)
            if (jsonResponse.businesses) { // if theres a valid business key, return array with business properties
                return jsonResponse.businesses.map(businessData => ({
                        id: businessData.id,
                        imageSrc: businessData.image_url,
                        name: businessData.name,
                        address: businessData.location.address1,
                        city: businessData.location.city,
                        state: businessData.location.state,
                        zipCode: businessData.location.zip_code,
                        category: businessData.categories[0].title,
                        rating: businessData.rating,
                        reviewCount: businessData.review_count
                }))
            }
        })
    }
}

export default Yelp;