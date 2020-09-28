import { AxiosHttpClient } from './axios-http-client'
import { internet, random } from 'faker'
import axios from 'axios'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockPostRequest = (): HttpPostParams<any> => ({
  url: internet.url(),
  body: random.objectElement()
})

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and verb', async () => {
    const httpRequest = mockPostRequest()
    const sut = makeSut()
    await sut.post(httpRequest)

    expect(mockedAxios.post).toHaveBeenCalledWith(httpRequest.url)
  })
})
