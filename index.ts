import { registerWidgetTaskHandler } from "react-native-android-widget";

import widgetTaskHandler from "@/widgets/widgetTaskHandler";

registerWidgetTaskHandler(widgetTaskHandler);

// eslint-disable-next-line import/first
import "expo-router/entry";
