Important Notice: <br />

    I understood some aspects of redux while i was doing this project, so I added a Sign Up REDUX button which saves the user in a global redux state. Normal Sign Up button uses local states.

If there is user info navigate to SignIn

Ask User: <br />

    email, password, password again, username <br />

    handleSignUp: <br />

    save it on: <br />
    localhost:3000/user with axios.post, <br />

    AsyncStorage as JSON string, <br />

    -there is any missing user info return alert, <br />

    navigate to SignIn page.

Caution: While I was writing the codes, I had "Axios Network Error" and to solve it in terminal:

    adb -s 89U4C18629000389 reverse tcp:3000 tcp:3000

    the char sequence after -s is my device's IP which is obtained with:

    adb devices
