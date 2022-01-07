import axios from 'axios'

class APIworker {
  static getRepositories = async (query, sort = "stars", order = "desc", perPage = 3, page = 1) => {
    const response = await axios.get(`https://api.github.com/search/repositories`, {
      params: {
        q: query,
        sort: sort,
        order: order,
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