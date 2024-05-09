import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com/'

const hetchImages = async () => {
    const response = await axios.get('/search/photos/query=cats');
    return response.data.hits;
};