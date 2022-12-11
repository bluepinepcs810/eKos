import Api from '.';
import { NonceResponseType, SignInResponseType } from '../types/auth';

const getNonce = (publicKey?: string): Promise<NonceResponseType> => {
  return Api.post('/auth/nonce', { publicKey });
};

const signin = (publicKey?: Uint8Array, signature?: Buffer): Promise<SignInResponseType> => {
    return Api.post('/auth/signin', { publicKey, signature });
}

const AuthApi = {
    getNonce,
    signin
};

export default AuthApi;
