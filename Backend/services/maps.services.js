const axios = require('axios');

module.exports.getAddressCoordinate = async(address)=>{

    const apiKey = process.env.API_KEY_FOR_LAT_LON;
    const url = `https://geocode.maps.co/search?q=${encodeURIComponent(address)}&api_key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response) {
            const location = response.data[ 1 ];
            return {
                ltd: location.lat,
                lng: location.lon
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getDistanceTime = async (origin, destination) => {

    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;

    const url = `https://geocode.maps.co/search?q=${encodeURIComponent(address)}&api_key=${apiKey}`;
    try {


        const response = await axios.get(url);
        if (response.data.status === 'OK') {

            if (response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS') {
                throw new Error('No routes found');
            }

            return response.data.rows[ 0 ].elements[ 0 ];
        } else {
            throw new Error('Unable to fetch distance and time');
        }

    } catch (err) {
        console.error(err);
        throw err;
    }
}


module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('query is required');
    }

    const apiKey = process.env.API_FOR_SUGGESTIONS;
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(input)}&apiKey=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response) {
            return response.data.features.map(prediction => prediction.city).filter(city => city);
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}
