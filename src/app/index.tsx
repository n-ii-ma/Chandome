import { useObserve } from "expo-observe";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { requestWidgetUpdate } from "react-native-android-widget";
import "react-native-reanimated";

import { getHolidayData } from "@/utils/checkHoliday";

import Background from "@/components/Background";
import DateWidget from "@/components/DateWidget";

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({ fade: true });

const Index = () => {
  const { markInteractive } = useObserve();

  const { isHoliday, cause } = getHolidayData();

  // Request widget update after the app is opened to check if today's a holiday
  useEffect(() => {
    requestWidgetUpdate({
      widgetName: "Date",
      renderWidget: () => <DateWidget isHoliday={isHoliday} />,
    });
  }, [isHoliday]);

  const onLayoutRootView = () => {
    SplashScreen.hide();
    markInteractive();
  };

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <Background isHoliday={isHoliday} holidayDesc={cause} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
