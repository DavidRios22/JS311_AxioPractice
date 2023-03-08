console.log("Im running");

const axios = require('axios')

const getContact = () => {
    try {
        const response = axios.get("https://randomuser.me/api/")
            .then(response => console.log(response.data.results))
    } catch (error) {
        console.log("ERROR", error);
    } finally {

    }
}

const getStarWarsPerson = async (id) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => console.log(response.data))
    } catch (error) {
        console.log("ERROr", error);
    } finally {

    }
}

console.log(getStarWarsPerson(1));