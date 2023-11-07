import fs from 'fs'
import path from 'path'

import { MockMethod, MockConfig } from 'vite-plugin-mock'

export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'vben'
        }
      }
    }
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben'
      }
    }
  },
  {
    url: '/api/test',
    method: 'post',
    rawResponse: async (req, res) => {
      const imagePath = path.join(__dirname, 'codermey.jpg')

      fs.readFile(imagePath, (err, data) => {
        if (err) {
          res.setHeader('Content-Type', 'text/plain')
          res.statusCode = 500
          res.end('Error: Unable to read image file')
        } else {
          res.setHeader('Content-Type', 'image/jpg')
          res.statusCode = 200
          res.end(data)
        }
      })
    }
  }
] as MockMethod[]
