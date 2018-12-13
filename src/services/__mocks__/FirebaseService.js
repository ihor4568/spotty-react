export const data = {
  name: "noname",
  songs: ["song"]
};

export const snapshot = { val: () => data };

export const dbInstance = {
  ref: jest.fn().mockReturnThis(),
  once: jest.fn(() => Promise.resolve(snapshot)),
  set: jest.fn()
};

const database = jest.fn(() => dbInstance);

export const FirebaseService = {
  database,
  auth() {}
};
