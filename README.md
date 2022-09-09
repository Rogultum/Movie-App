### This project is for Patika.dev Akbank React Native Bootcamp. 

Packages Used:

Movie API -> [TMDB](https://www.themoviedb.org/),

Global States -> [redux](https://redux.js.org/),

Local Host -> [json-server](https://github.com/typicode/json-server),

Api requests -> [axios](https://axios-http.com/docs/intro),

Navigation -> [react navigation](https://reactnavigation.org/),


#### 1. SignUp: user enter their information and the information is saved on AsyncStorage, redux, localhost. There is a detailed explanation of [SignUp.md](https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-Rogultum/blob/main/src/screen/SignUp/SignUp.md)

![Screenshot_20220910_004938_com movieapp](https://user-images.githubusercontent.com/48841840/189453698-76a64a0e-4e9d-41a0-a036-23a3861ec82c.jpg)

#### 2.SignIn: user has to enter the correct info which is what they signedup with. [SignIn.md](https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-4-Rogultum/blob/main/src/screen/SignIn/SignIn.md)

![Screenshot_20220910_010725_com movieapp](https://user-images.githubusercontent.com/48841840/189453710-09d9a556-7945-4dca-af3f-ee794b37979b.jpg)

#### 3.Home: user sees the NowPlaying movies in a Flatlist.

![Screenshot_20220910_010740_com movieapp](https://user-images.githubusercontent.com/48841840/189453761-a394f701-248f-41a7-90c4-46f60bea697f.jpg)

#### 4. Upper Tabs: user can filter anything they want in the upper tabs.

![Screenshot_20220910_010746_com movieapp](https://user-images.githubusercontent.com/48841840/189453783-c36d3fd7-b3f5-4323-951b-11eba840c52f.jpg)
![Screenshot_20220910_010750_com movieapp](https://user-images.githubusercontent.com/48841840/189453793-456e4715-610d-454c-b9c7-d0966a1037e9.jpg)
![Screenshot_20220910_010753_com movieapp](https://user-images.githubusercontent.com/48841840/189453798-233d45a8-d3a2-45ab-b292-44565202aa0b.jpg)
![Screenshot_20220910_010757_com movieapp](https://user-images.githubusercontent.com/48841840/189453803-2328ce76-192b-47f4-b038-b8a4305ab3d3.jpg)

#### 5. From bottom navigation user can pick Search: they can search anything they want and movies will be listed in a FlatList.

![Screenshot_20220910_010806_com movieapp](https://user-images.githubusercontent.com/48841840/189453955-d52d84b9-aa92-4a33-91b9-90ae1f4e3b44.jpg)
![Screenshot_20220910_010816_com movieapp](https://user-images.githubusercontent.com/48841840/189453964-8745aa20-6631-4e2d-b095-40e8291674b7.jpg)

#### 6.  From bottom navigation user can pick Profile: user can "paste" an url to choose their profile image, it will be rendered immediately. They can also see their username below image. They can choose Theme, Edit Profile or Logout. 

![Screenshot_20220910_010820_com movieapp](https://user-images.githubusercontent.com/48841840/189454143-43412df4-b4a8-47b3-a725-96f0623e799b.jpg)
![Screenshot_20220910_011051_com movieapp](https://user-images.githubusercontent.com/48841840/189454228-cccbff06-e4b7-4937-91d6-9e799455d99e.jpg)

#### 7. Theme: From global redux store, user can change theme with a switch. But the theme only changes on ThemeScreen and ProfileScreen.

![Screenshot_20220910_011057_com movieapp](https://user-images.githubusercontent.com/48841840/189454243-5497c19d-216f-4322-98fe-72fe37676c53.jpg)
![Screenshot_20220910_011059_com movieapp](https://user-images.githubusercontent.com/48841840/189454251-f6b6bb37-458d-4e83-ba34-c7dbed79d95b.jpg)
![Screenshot_20220910_011101_com movieapp](https://user-images.githubusercontent.com/48841840/189454286-549b41b5-06e6-44ed-bcc2-7fc65850433e.jpg)

#### 8. EditProfile: user can see their info in placeholders of textinput and can alter them, but it doesn't change the redux state's yet. User can also press Logout REDUX which deletes their data from redux.

![Screenshot_20220910_011105_com movieapp](https://user-images.githubusercontent.com/48841840/189454307-62677e06-2da2-4753-8ce3-17924327c594.jpg)

#### 9. Logout in ProfileScreen: When user presses Logout, their information will be deleted from AsyncStorage and they have to SignUp once again.
