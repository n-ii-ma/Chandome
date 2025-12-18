import { registerRootComponent } from "expo";
import { registerWidgetTaskHandler } from "react-native-android-widget";

import App from "@/app/App";
import widgetTaskHandler from "@/app/widgetTaskHandler";

registerRootComponent(App);
registerWidgetTaskHandler(widgetTaskHandler);
