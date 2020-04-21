import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WvUMLXMRrn2j21d1RP1czYD7d0HItIcH7tXa71Pspxw'
    }
})