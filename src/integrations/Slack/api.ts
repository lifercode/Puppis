import axios from 'axios'

const { SLACK_API_TOKEN } = process.env

const api = axios.create({
  baseURL: 'https://slack.com/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${SLACK_API_TOKEN}`
  }
})

export default api
