import { AuthenticationParams } from '@/domain/usecases/authentication'
import { internet, random } from 'faker'
import { AccountModel } from '../models/account-model'

const mockAuthentication = (): AuthenticationParams => ({
  email: internet.email(),
  password: internet.password()
})

const mockAccountModel = (): AccountModel => ({
  accessToken: random.uuid()
})

export { mockAuthentication, mockAccountModel }
