/* eslint-disable no-undef,import/named */

export const data = {
  name: "noname",
  songs: ["song"]
};

export const snapshot = { val: () => data };

const database = jest.fn();

database.mockReturnValue({
  ref: jest.fn().mockReturnThis(),
  once: jest.fn(() => Promise.resolve(snapshot)),
  set: jest.fn()
});

export const FirebaseService = {
  database,
  auth() {}
};
