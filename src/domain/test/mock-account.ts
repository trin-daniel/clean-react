import { AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models/'
import { internet, random } from 'faker'

const mockAuthentication = (): AuthenticationParams => ({
  email: internet.email(),
  password: internet.password()
})

const mockAccountModel = (): AccountModel => ({
  accessToken: random.uuid()
})

export { mockAuthentication, mockAccountModel }
