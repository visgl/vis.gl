import fetch from 'fetch'

import { projectFetched } from 'reducers/github'

const BASE = 'https://api.github.com'

const getHeaders = () => ({
  // Wow such a hacker stealing a key with no scope!! :''')
  Authorization: `Basic ${btoa('Apercu:e9b35271b05350f0dd7a33fd49ab661e0d41fd2c')}`,
})

export const fetchRepos = repos => dispatch => {
  repos.forEach(async repo => {
    try {
      const headers = getHeaders()
      const res = await fetch(`${BASE}/repos/${repo}`, { headers })
      dispatch(projectFetched(res))
    } catch (e) {}
  })
}
