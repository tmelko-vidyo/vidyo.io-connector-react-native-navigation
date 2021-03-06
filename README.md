# Vidyo Connector React Native (+Navigation)


## Acquire VidyoClient iOS and Android SDKs
> Note: Highlighted steps are very important because samples already contain configurations specified below and both SDK packages are linked as relative folders located in 'vidyo.io-connector-react-native-navigation' directory.

1. Download the latest Vidyo.io Android & iOS SDK packages:

    > https://static.vidyo.io/latest/package/VidyoClient-AndroidSDK.zip
    
    > https://static.vidyo.io/latest/package/VidyoClient-iOSSDK.zip
    
2. **Unzip VidyoClient-AndroidSDK folder and move contents of `VidyoClient-AndroidSDK/lib/android` 
   to `vidyo.io-connector-react-native-navigation/android/app/libs/android`**
   
3. **Unzip VidyoClient-iOSSDK folder and move contents of `VidyoClient-iOSSDK/lib/ios` 
   to `vidyo.io-connector-react-native-navigation/ios/lib/ios`**

## Preparing

Go to `./android/local.properties` and set location of the Android SDK

## Build and Run Application

1. Follow next link and install all described dependencies.

    `https://facebook.github.io/react-native/docs/getting-started.html`

2. Install dependencies.

    `yarn`
    
    `cd ios`
    
    `pod install`
    
    `cd ..`

3. Build and run the application on the iOS or Android device.

    `npx react-native run-ios`
    
    `npx react-native run-android`
