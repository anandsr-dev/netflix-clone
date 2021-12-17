import axios from './axios'

export const getData = async (url) => {
    try {
        const res = await axios.get(url)
        return res.data.results
    } catch (error) {
        console.log(error)
        return null
    }
}

