import axios from 'axios'

const { GITHUB_API_TOKEN } = process.env

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Authorization': `token ${GITHUB_API_TOKEN}`
  }
})

export default api
