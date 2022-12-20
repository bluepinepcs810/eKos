import { SessionModel } from './types';
import { action } from 'easy-peasy';

const sessionStore: SessionModel = {
  session: {
    initial: true,
    signedIn: false,
  },
  setSignedIn: action((state) => {
    state.session.signedIn = true;
  }),
  unsetSignedIn: action((state) => {
    state.session.signedIn = false;
  }),
  setSessionInitial: action((state) => {
    state.session.initial = true;
  }),
  unsetSessionInitial: action((state) => {
    state.session.initial = false;
  }),
  setSessionMe: action((state, payload )=> {
    state.session.me = payload;
  })
};

export default sessionStore;
