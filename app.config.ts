import type { ConfigContext, ExpoConfig } from "expo/config";
import type { WithAndroidWidgetsParams } from "react-native-android-widget";

const widgetConfig: WithAndroidWidgetsParams = {
  fonts: ["./assets/fonts/Vazirmatn-Regular.ttf"],
  widgets: [
    {
      name: "Date",
      label: "امروز چندمه؟",
      // (70 × n − 30) **n is number of cells**
      minWidth: `${70 * 3 - 30}dp`, // Min 3 cells
      minHeight: `${70 * 1 - 30}dp`, // Min 1 cell
      targetCellWidth: 5,
      targetCellHeight: 1,
      resizeMode: "horizontal",
      description: "Get Today's Date in Jalali Calendar",
      previewImage: "./assets/images/date_widget_preview.png",
      updatePeriodMillis: 5400000, // 90 minutes
    },
  ],
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "امروز چندمه؟",
  description:
    "An App which Gives Today's Date in Gregorian, Jalali, and Hijri",
  slug: "Chandome",
  version: "8.0.0",
  orientation: "portrait",
  icon: "./assets/icons/icon.png",
  userInterfaceStyle: "light",
  plugins: [
    ["react-native-android-widget", widgetConfig],
    ["expo-font", { fonts: ["./assets/fonts/Vazirmatn-Regular.ttf"] }],
    [
      "expo-splash-screen",
      {
        image: "./assets/icons/icon.png",
        resizeMode: "contain",
        backgroundColor: "#000000",
        imageWidth: 200,
      },
    ],
  ],
  newArchEnabled: true,
  experiments: {
    tsconfigPaths: true,
    reactCompiler: true,
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
    edgeToEdgeEnabled: true,
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
