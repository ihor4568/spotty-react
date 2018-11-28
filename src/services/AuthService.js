import { FirebaseService } from "./FirebaseService";

const auth = FirebaseService.auth();

export class AuthService {
  static signIn(email, pass) {
    return auth.signInWithEmailAndPassword(email, pass);
  }

  static signUp(email, pass, name) {
    return auth.createUserWithEmailAndPassword(email, pass).then(() => {
      return new Promise(resolve => {
        auth.currentUser.updateProfile({ displayName: name }).then(() => {
          resolve(auth.currentUser);
        });
      });
    });
  }

  static signOut() {
    return auth.signOut();
  }

  static check() {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged(user => {
        if (user) {
          resolve(user);
        } else {
          reject(user);
        }
      });
    });
  }
}
