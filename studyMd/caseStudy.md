### keystore Genrate key Android:
``` 
keytool -genkey -v -keystore projectName.keystore -alias projectName -keyalg RSA -keysize 2048 -validity 20000
```
### Update this for hide white bottom navigation color when modal is open, after update the styles.xml file the white bottom tab will now show again:
``` 
Path : Project/android/app/src/main/res/values/styles.xml

code :  <style name="Theme.FullScreenDialog">
  <item name="android:windowNoTitle">true</item>
  <item name="android:windowIsFloating">false</item>
  <item name="android:windowBackground">@android:color/transparent</item>
  <item name="android:statusBarColor">@android:color/transparent</item>
  <item name="android:navigationBarColor">@android:color/transparent</item>
</style>
```

### use this code for if u want datetime stamp and type of the build in react-native
```
we have need to add this and build.gradle file after build type object
here is the path  appName/android/app/build.gradle

 def date = new Date()
    def formattedDate = date.format('dd.MM.yyyy HH:mm')
    def appName = "SpeedoPrime"

    // Replace spaces with underscores and remove special characters
   

    // Configure the APK file name
    applicationVariants.all { variant ->
        variant.outputs.all {
            def version = variant.versionName
            // Create a new APK file name with the format "your_app_name-variantName-YYYYMMDD.apk"
            def newApkName = "${appName}-${variant.name}-${version}-${formattedDate}.apk"

            // Set the APK file name
            outputFileName = newApkName
        }
    }
```


#### IOS TEST FLIGHT DEMO

```
https://youtu.be/6VuLukGpNv8?si=L_bjNWjBnzM4oh7h
```

### for prevent screenshot ios/android

```
react-native-capture-protection

import { CaptureProtection } from "react-native-capture-protection";

usecase : call under useEffect when app load

await CaptureProtection.prevent();
```


### for make a tag on the last commit

```
first commit your code  on the git
then follow the command line
 - git tag "your tag name without any space"
 - git push origin tag "your tag name with you make for tag"
```
