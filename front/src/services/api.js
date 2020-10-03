// Axios makes http calls easier
import axios from 'axios'

// This is the base URL that will be generated from when you deploy your serverless backend.
const baseUrl = 'https://8m7mubiqqj.execute-api.us-east-1.amazonaws.com/dev';

export const apiCall = async () => {
    const res = await axios.get(
        `${baseUrl}/hello`
    )
    return res.data
}