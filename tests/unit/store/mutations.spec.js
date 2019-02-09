

import { CARDPOOL } from '@/store/constants'
import { SET_PLAYER_INFO, UPDATE_PREFERENCES, SET_FIREBASE_ERROR } from '@/store/mutations'

import { testStore } from '../../util/test-store'

import shortUuid from 'short-uuid'

describe('Store Mutations', () => {

  let store = testStore();

  test('set player info', () => {
   
    let newId = shortUuid().new();
    let newName = "Fred";
    store.commit(SET_PLAYER_INFO, {
      id: newId,
      name: newName
    });

    expect(store.getters.player.id).toBe(newId);
    expect(store.getters.player.name).toBe(newName);

  });

  test('update preferences', () => {

    let newSet = 'dom';
    let newCardpool = CARDPOOL.CUBE + '3/2/1/1';
    store.commit(UPDATE_PREFERENCES, {
      set_code: newSet,
      cardpool: newCardpool,
      pick_timer: true,
      pick_ratings: true
    });

    expect(store.state.preferences.set_code).toBe(newSet);
    expect(store.state.preferences.sets.dom.cardpool).toBe(newCardpool);
    expect(store.state.preferences.pick_timer).toBe(true);
    expect(store.state.preferences.pick_ratings).toBe(true);

  });

  test('firebase errors', () => {

    // setting an error
    let errName = "FirebaseError";
    let errCode = "customcode";
    let errMessage = "This is the message";
    store.commit(SET_FIREBASE_ERROR, {
      name: errName,
      code: errCode,
      message: errMessage
    });
    let error = store.state.firebase_error;
    expect(error.name).toBe(errName);
    expect(error.code).toBe(errCode);
    expect(error.message).toBe(errMessage);

    // clearing the error
    store.commit(SET_FIREBASE_ERROR, null);
    expect(store.state.firebase_error).toBe(null);

  });
  

});