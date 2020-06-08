import api from './api'

const Github = {
  async getIssues() {
    const rest = await api.get('issues')

    return rest.data
  }
}

export default Github
