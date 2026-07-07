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
  const { isHoliday, cause } = getHolidayData();

  // Request widget update after the app is opened to check if today's a holiday
  useEffect(() => {
    requestWidgetUpdate({
      widgetName: "Date",
      renderWidget: () => <DateWidget isHoliday={isHoliday} />,
    });
  }, [isHoliday]);

  return (
    <View onLayout={() => SplashScreen.hide()} style={styles.container}>
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
