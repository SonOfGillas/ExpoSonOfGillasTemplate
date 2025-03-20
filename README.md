# Welcome to ExpoGO SonOfGillas Template 👋
the aim of this repository is to create an handfull template for new React Native Projects.
In Particular the project use expo go and it's Countinuous Native Generation

# Software Needed
AndoridStudio Or Xcode \
Node.js v20.18.1 \
react-native v0.78.1 \
expo-sdk  v52.0.39


## Get started

1. Install dependencies
   ```bash
   yarn install
   ```

2. Enable your physical device debug-usb (https://reactnative.dev/docs/running-on-device) \
   OR \
   Open an Emulator (with AndoridStudio or Xcode)


Here there are two possibilities:\
CABLE CONNECTION (a cable must be always connecting the device and the pc)

   3. Generate a Android and Ios Foulders
      ```bash
      npx expo prebuild
      ```

   4. Launch the command for build and Lunch the app
      ```bash
         #Build for android
         yarn android
         #Build for ios
         yarn ios
      ```

WIRELESS CONNECTION 

   3. Install eas cli
      ```bash
         yarn add eas-cli
      ```

   4. create a dev account in https://expo.dev/ 

   5. login with eas-cli with your expo account
      ```bash
         eas login
      ```

   6. build your app
      ```bash
         #Build for android
         yarn build:android:dev
         #Build for ios
         yarn build:ios:dev
      ```

   7. Intall the build 
      ```bash
         adb install /Path/to/your/Build/development.apk ??
      ```

   8. Connect your Device and your Pc to the same Wifi 
      (Wifi repaters don't count as same wifi. due to different ip mapping between moden and repaters)


   9. Start the local development server
      ```bash
      npx expo start
      ```

   10. The expo start log should have print your IP and a PORT, this is where the development server is hosted. 
       If you can't find then the port should always be 8081, and your ip can be find with this command
      ```bash
         #Get MacOs Ip
         ifconfig | grep "inet 192.168"
      ```

   11. open the app installed with the step 7 and insert as server url
      ```bash
         http://<your-ip>:8081
      ```

NOTE:
The build configures are in the eas.json


For other information
- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
