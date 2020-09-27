import { AuthenticationParams } from '../usecases/authentication'
import { internet } from 'faker'

const mockAuthentication = (): AuthenticationParams => ({
  email: internet.email(),
  password: internet.password()
})

export { mockAuthentication }
