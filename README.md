See [expo issue #9949](https://github.com/expo/expo/issues/9949)

## 🐛 Bug Report

### Summary of Issue <!-- (just a few sentences) -->

On Android standalone app, when the keyboard shows, the color behind it is the same color as the splash screen. On Expo client, it is white.

It seems the same issue as #1250, except that removing `androidStatusBar` from `app.json` didn't fix it.

Maybe it is related to the `Activity` background color and could be fixed with a package such as [react-native-background-color](https://github.com/goa-codebet/react-native-background-color), although I'm not sure.


### Environment - output of `expo diagnostics` & the platform(s) you're targeting

Tested in the following devices:
* Xiaomi Pocophone F1 - MIUI Global 11.0.9 - Android 10
* Motorola Moto G5 Plus - Android 8.1.0

```
  Expo CLI 3.24.2 environment info:
    System:
      OS: Windows 10 10.0.18362
    Binaries:
      Node: 12.14.1 - C:\Program Files\nodejs\node.EXE
      Yarn: 1.22.4 - C:\Program Files (x86)\Yarn\bin\yarn.CMD
      npm: 6.14.5 - C:\Program Files\nodejs\npm.CMD
    IDEs:
      Android Studio: Version  4.0.0.0 AI-193.6911.18.40.6514223
    npmPackages:
      expo: ~38.0.1 => 38.0.3
      react: ~16.11.0 => 16.11.0
      react-dom: ~16.11.0 => 16.11.0
      react-native: https://github.com/expo/react-native/archive/sdk-38.0.0.tar.gz => 0.62.2
      react-native-web: ~0.11.7 => 0.11.7
```


### Reproducible Demo

Since it involves a standalone app and a splash screen, it is not possible to reproduce within a snack. To create a reproducible example, just follow the steps below or check the repo [expo-color-behind-keyboard](https://github.com/Rafatcb/expo-color-behind-keyboard).

1) Run `expo init`
2) Add `"backgroundColor": "#2962ff"` to `app.json` under `"splash"` settings:
```
"splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#2962ff"
    },
```
3) Render a `<TextInput>` in the `App.ts`
4) Use the image below as `splash.png`. Its original size is 1242 x 2436.

<img src="https://user-images.githubusercontent.com/26308880/91326293-8c1e5780-e79a-11ea-8d41-a559263db7f8.png" height="300"/>

 
### Steps to Reproduce

The APK from the repo mentioned above can be found [here](https://github.com/Rafatcb/expo-color-behind-keyboard/releases/tag/bug).

1) Run `yarn start` and notice the color behind the keyboard (when it is showing up) is white.
2) Build an APK, install it, open the app and notice the color behind the keyboard is `#2962ff` (same as the splash screen).


### Expected Behavior vs Actual Behavior

**Actual Behavior:**

| Expo Client  | Standalone App |
|---|---|
| <img src="https://user-images.githubusercontent.com/26308880/91328443-5c248380-e79d-11ea-8ff5-5ba8389332d9.gif" /> | <img src="https://user-images.githubusercontent.com/26308880/91328539-74949e00-e79d-11ea-9f58-93d34cd1a444.gif" /> |

**Expected Behavior:**

1) The color behind the keyboard should be the same both in Expo client and Standalone app, and it shouldn't be the splash screen color.
2) It would be nice if I could set that color, so I could set it according to the app theme.