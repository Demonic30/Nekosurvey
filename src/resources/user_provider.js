import HttpRequest from './http_request'

class UserProvider extends HttpRequest {
  constructor () {
    // api api
    super('https://apinekosurvey.herokuapp.com')
  }

  async getUser () {
    // example path https://api.myjson.com/bins/17k39m/
    const {data} = await this.get('/api/questions/')
    return data
  }
  async getTitle () {
    // example path https://api.myjson.com/bins/17k39m/
    const {data} = await this.get('/api/title/')
    return data
  }
  async getForm (num) {
    // example path https://api.myjson.com/bins/17k39m/
    const {data} = await this.get('/api/questions/'+num)
    return data
  }
}

export default UserProvider