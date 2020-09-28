import { internet, random } from 'faker'
import { HttpPostParams } from '../protocols/http'

const mockPostRequest = (): HttpPostParams<any> => ({
  url: internet.url(),
  body: random.objectElement()
})

export { mockPostRequest }
