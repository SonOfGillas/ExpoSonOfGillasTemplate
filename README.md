# Welcome to ExpoGO SonOfGillas Template 
the aim of this repository is to create an handfull template for new React Native Projects.
In Particular the project use expo go and it's Countinuous Native Generation

# Software Needed
AndoridStudio Or Xcode \
Node.js v20.18.1 \
react-native v0.78.1 \
expo-sdk  v52.0.39 \
eas-cli v16.0.1

## Env Management and Setup
1. you need to create an account at https://expo.dev/ 
2. get access to the project or create one in https://expo.dev/ 
    <img width="951" alt="Screenshot 2025-01-22 at 3 54 27 PM" src="https://github.com/user-attachments/assets/35fb62be-dee0-4ee8-acb1-0fd85ef82ceb" />
3. Open the project in https://expo.dev/ and set this values in app.config.ts:\
   Set EAS_PROJECT_ID to your Expo project ID.\
   Set PROJECT_SLUG to your project slug.\
   Set OWNER to your Expo account name.\
   <img width="947" alt="Screenshot 2025-01-22 at 3 56 05 PM" src="https://github.com/user-attachments/assets/e8e17cef-8cbb-4d25-b09a-d861d08b6b2c" />
4. In the app.config.ts upadate: \
   the APP_NAME,\
   the PACKAGE_NAME,\
   the BUNDLE_IDENTIFIER, \
   and the SCHEMA (only if you need deeplinking)
5. in the /assets/images/icons update the icons
6. in your https://expo.dev/ open your projet and in the configuration tab open
   the "Environment variables" section
   ![Alt text](./assets/images/readme_images/create_env_file.png)
7. Here you can create your variables, each variable have a Name a Environment 
   and a Value. Remember to create the variable for each enviroment if they are different.
8. Install eas and log in with you expo account
      ```bash
         yarn add eas-cli
      ```
      ```bash
          eas login
      ```
9. pull the .env.local file with the command:
   ```bash
      eas env:pull
   ```
   check build for other information


## Get started
1. setup the env following the "Env Management and Setup" section

2. Install dependencies
   ```bash
   yarn install
   ```

3. Enable your physical device debug-usb (https://reactnative.dev/docs/running-on-device) \
   OR \
   Open an Emulator (with AndoridStudio or Xcode)

4. Generate a Android and Ios Foulders
   ```bash
   npx expo prebuild
   ```
5. build your app. (If you did the "Env Management and Setup" section, the 
   build command will atomatically get the env prom expo.dev project during the eas build)
   ```bash
      #Build for android
      yarn build:android:dev
      #Build for ios
      yarn build:ios:dev
   ```
   if you want to create a build without android keystore or apple account login (simulators build)
   ```bash
      #Build for android no keystore needed
      yarn build:android:debug
      #Build for ios no login needed
      yarn build:ios:debug
   ```
6. Intall the build 
   ```bash
      adb install /Path/to/your/Build/development.apk ??
   ```
7. Connect your Device and your Pc to the same Wifi 
   (Wifi repaters don't count as same wifi. due to different ip mapping between moden and repaters)
8. Start the local development server
   ```bash
   npx expo start
   ```
9. The expo start log should have print your IP and a PORT, this is where the development server is hosted. 
If you can't find then the port should always be 8081, and your ip can be find with this command
   ```bash
      #Get MacOs Ip
      ifconfig | grep "inet 192.168"
   ```
10. open the app installed with the step 6 and insert in the serber usl text field
   ```
      http://<your-ip>:8081
   ```

## Build 
you don't need to pull the correct .env.local file before every build
just run the build script and they will automatically use the profile to determinate the corret env variables to use\
to update the app version you need to edit the app.config.ts
\
   Develop-Debug (simulators)
   ```bash
      #Build for android thant does't need a keystore 
      yarn build:android:debug
      #Build for ios that does't need to login
      yarn build:ios:debug
   ```
   Develop
   ```bash
      #Build for android
      yarn build:android:dev
      #Build for ios
      yarn build:ios:dev
   ```
   Stage-Preview
   ```bash
      #Build for android
      yarn build:android:preview
      #Build for ios
      yarn build:ios:preview
   ```
   Production
   ```bash
      #Build for android
      yarn build:android:prod
      #Build for ios
      yarn build:ios:prod
      eas submit --platform ios
   ```
NOTE:
The build configures are in the eas.json and the scripts are in package.json


For other information
- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
