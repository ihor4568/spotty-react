import { FirebaseService } from "./FirebaseService";

const auth = FirebaseService.auth();

export class AuthService {
  static signIn(email, pass) {
    return auth.signInWithEmailAndPassword(email, pass);
  }

  static async signUp(email, pass, name) {
    await auth.createUserWithEmailAndPassword(email, pass);
    return auth.currentUser.updateProfile({ displayName: name });
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
