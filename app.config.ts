import type { ConfigContext, ExpoConfig } from "expo/config";
import type { WithAndroidWidgetsParams } from "react-native-android-widget";

const widgetConfig: WithAndroidWidgetsParams = {
  // Paths to all custom fonts used in all widgets
  fonts: ["./assets/fonts/Vazirmatn-Regular.ttf"],
  widgets: [
    {
      name: "Date", // This name will be the **name** with which we will reference our widget.
      label: "امروز چندمه؟", // Label shown in the widget picker
      // Min 3 x 1 cells (70 × n − 30) **n is number of cells**
      minWidth: `${70 * 3 - 30}dp`,
      minHeight: `${70 * 1 - 30}dp`,
      description: "Get Today's Date in Gregorian", // Description shown in the widget picker
      previewImage: "./assets/images/date_widget_preview.png", // Path to widget preview image
      resizeMode: "horizontal",
      // Max 5 x 1 cells
      maxResizeWidth: `${70 * 5 - 30}dp`,

      // How often, in milliseconds, that this AppWidget wants to be updated.
      // The task handler will be called with widgetAction = 'UPDATE_WIDGET'.
      // Default is 0 (no automatic updates)
      // Minimum is 1800000 (30 minutes == 30 * 60 * 1000).
      updatePeriodMillis: 3600000, // One hour
    },
  ],
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "امروز چندمه؟",
  description:
    "An App which Gives Today's Date in Gregorian, Jalali, and Hijri",
  slug: "Chandome",
  version: "4.0.0",
  orientation: "portrait",
  icon: "./assets/icons/icon.png",
  userInterfaceStyle: "light",
  plugins: [["react-native-android-widget", widgetConfig]],
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#000000",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: false,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icons/icon_foreground.png",
      backgroundImage: "./assets/icons/icon_background.png",
      monochromeImage: "./assets/icons/icon_monochrome.png",
    },
    package: "com.nima96.Chandome",
    versionCode: 4,
  },
  web: {
    favicon: "./assets/icons/favicon.png",
  },
  extra: {
    eas: {
      projectId: "5f361a7b-3d7f-4708-b9da-04949b38c2dd",
    },
  },
  runtimeVersion: {
    policy: "appVersion",
  },
  updates: {
    url: "https://u.expo.dev/5f361a7b-3d7f-4708-b9da-04949b38c2dd",
  },
});
