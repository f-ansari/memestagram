import Axios from 'axios'

const Client = Axios.create({ baseURL: 'http://localhost:5000/' })

export default Client
