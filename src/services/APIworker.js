import axios from 'axios'

class APIworker {
  static getRepositories = async (query, perPage = 3, page = 1) => {
    const response = await axios.get(`https://api.github.com/search/repositories`, {
      params: {
        q: query,
        per_page: perPage,
        page: page
      }
    })
    // const response = await axios.get(`https://api.github.com/search/repositories?q=${query}&per_page=${perPage}&page=${page}`)
    return response
  }

  static getCurrentRepository = async (username, repoName) => {
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    return response
  }
}

export default APIworker