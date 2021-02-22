import request from 'superagent'
import process from 'process'

const developmentUrl = 'http://localhost:3001'
const productionUrl = 'https://app.osaifu.zatsuzen.com'
const baseUrl = process.env.REACT_APP_MODE === 'production' ? productionUrl : developmentUrl

export function post(url, send) {
  return new Promise((resolve, reject) => {
    request
      .post(baseUrl + url)
      .type('form')
      .send(send)
      .end((err, response) => {
        return err ? reject(err) : resolve(response)
      })
  })
}
