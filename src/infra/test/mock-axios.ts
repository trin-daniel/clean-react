import { random } from 'faker'
import axios from 'axios'

const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue({
    data: random.objectElement(),
    status: random.number()
  })
  return mockedAxios
}

export { mockAxios }
