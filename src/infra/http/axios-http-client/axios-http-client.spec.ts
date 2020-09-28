import { AxiosHttpClient } from './axios-http-client'
import { internet, random } from 'faker'
import axios from 'axios'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = {
  data: random.objectElement(),
  status: random.number()
}
mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const mockPostRequest = (): HttpPostParams<any> => ({
  url: internet.url(),
  body: random.objectElement()
})

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const httpRequest = mockPostRequest()
    const sut = makeSut()
    await sut.post(httpRequest)

    expect(mockedAxios.post).toHaveBeenCalledWith(httpRequest.url, httpRequest.body)
  })

  test('Should return the correct statusCode and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())

    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })
})
