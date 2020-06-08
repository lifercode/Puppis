import api from './api'

const Slack = {
  async postMessage({ text, channel }) {
    const rest = await api.post(
      'chat.postMessage',
      { text, channel }
    )

    return rest.data
  }
}

export default Slack
