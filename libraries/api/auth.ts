import Api from '.';
import { NonceResponseType } from '../types/auth';

const getNonce = (publicKey?: string): Promise<NonceResponseType> => {
  return Api.post('/auth/nonce', { publicKey });
};

const AuthApi = {
  getNonce,
};

export default AuthApi;
