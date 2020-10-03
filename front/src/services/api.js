import axios from 'axios'

const baseUrl = 'https://8m7mubiqqj.execute-api.us-east-1.amazonaws.com/dev';

export const apiCall = async () => {
    const res = await axios.get(
        `${baseUrl}/hello`
    )
    return res.data
}