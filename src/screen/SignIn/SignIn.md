Ask user: <br />
username and password, <br />
handleSignIn: <br />
-getItem from AsyncStorage, parse that data from JSON string into an object (username and pass) <br />
-they match with the ones in AsyncStorage: navigate to Home. <br />
-username or password doesn't match: return alert specfying what went wrong. <br />
-password entered wrong 3 or more times: <br />
return alert reset password.

Input and Button are custom components,
password inputs are "secureTextEntry"
