# AspireAssignment

## Description

   An Application Project to save your Debit Cards and perform various operations on your them. Based on the previous transactions and Data, this Application will show the spending pattern of the user. This application provides multiple Fintech solutions required by the user.
   
   - Topup your Account
> User can use the Topup feature to instantly deposit money in their Bank account linked to the application.
   - Set Weekly Spending Limit
> Set Weekly spending limit on your Debit Card to save money from unnecessary spending.
   - Freezing or Blocking your Card
> User can instantly freeze or Block the debit card if its Stolen or lost
   - Get a New Debit Card
> With a minimal information , user can apply for debit card on this application
   
## Technologies Used

   This application is build using [React Native Framework](https://reactnative.dev) and works on both Android and IOS devices. React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. This project was build using Visual Studio Code IDE
   
   [Redux]
   Redux is a predictable state container for JavaScript apps. It holds and updates the entire state of the app in the simplest manner possible while also using the least amount of boilerplate code.
   
   [ReactNavigation]
   React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history.
## Steps to Run the Project 

1. Clone this project
      git clone < project-url.git >
2. rm -rf node_modules/ package-lock.json
3. npm install

## iOS steps

1. cd ios && pod install
2. npx react-native run-ios

## Android steps

1. cd android && ./gradlew clean
2. npx react-native run-android
[NOTE] Please add local.properties file in android including sdk path.