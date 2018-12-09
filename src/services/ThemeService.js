import { FirebaseService } from "./FirebaseService";

const database = FirebaseService.database();

export class ThemeService {
  static getTheme(userId) {
    return database
      .ref(`users/${userId}/theme/`)
      .once("value")
      .then(theme => theme.val() || "light");
  }

  static setTheme(userId, themeValue) {
    return database.ref(`users/${userId}/theme/`).set(themeValue);
  }
}
