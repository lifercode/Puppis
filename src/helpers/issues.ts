import { Slack, Github } from '../integrations'

export const sendIssuesToSlack = async (channel = 'general'): Promise<void> => {
  try {
    const issues = await Github.getIssues()
    await Slack.postMessage({
      text: `Hello <@lifercode>! you have ${issues.length} issues`,
      channel
    })
  } catch (error) {
    console.log({ error: error.message })
  }
}
