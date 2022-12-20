import Api from '.';
import { UserType } from '../models/user';
import { NonceResponseType, SignInResponseType } from '../types/auth';

const getNonce = (publicKey?: string): Promise<NonceResponseType> => {
  return Api.post('/auth/nonce', { publicKey });
};

const signin = (
  publicKey?: Uint8Array,
  signature?: Buffer
): Promise<SignInResponseType> => {
  return Api.post('/auth/signin', { publicKey, signature });
};

const getMe = (): Promise<{ user: UserType }> => {
  return Api.get('/user/me');
}
const AuthApi = {
  getNonce,
  signin,
  getMe
};

export default AuthApi;
