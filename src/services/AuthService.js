import { FirebaseService } from "./FirebaseService";

const auth = FirebaseService.auth();
const db = FirebaseService.database();

export class AuthService {
  static signIn(email, pass) {
    return auth.signInWithEmailAndPassword(email, pass);
  }

  static async signUp(email, pass, name, avatarURL) {
    await auth.createUserWithEmailAndPassword(email, pass);
    await db.ref(`users/${auth.currentUser.uid}`).set({
      name: name,
      avatar: avatarURL
    });
    return auth.currentUser.updateProfile({
      displayName: name,
      photoURL: avatarURL
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
