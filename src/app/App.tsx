import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, RefreshControl } from "react-native";
import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { requestWidgetUpdate } from "react-native-android-widget";
import { SafeAreaProvider } from "react-native-safe-area-context";

import getHolidayDataAsync from "@/utils/checkHoliday";
import { useRefresh } from "@/hooks/useRefresh";

import Background from "@/components/Background";
import DateWidget from "@/components/DateWidget";

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({ fade: true });

const App = () => {
  const [isHoliday, setIsHoliday] = useState(false);
  const [holidayDesc, setHolidayDesc] = useState("");
  const [appIsReady, setAppIsReady] = useState(false);

  const getDates = async () => {
    try {
      const jalaliHoliday = await getHolidayDataAsync();

      // Get the holiday event
      const holidayEvent = jalaliHoliday?.events.find(
        (event: any) => event?.is_holiday,
      );

      if (holidayEvent !== undefined) {
        setHolidayDesc(holidayEvent?.description);
      } else {
        setHolidayDesc("");
      }

      if (jalaliHoliday?.is_holiday) {
        setIsHoliday(true);
      } else {
        setIsHoliday(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    async function prepare() {
      try {
        await getDates();
      } catch (error) {
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // Request widget update after the app is opened to check if today's a holiday
  useEffect(() => {
    requestWidgetUpdate({
      widgetName: "Date",
      renderWidget: () => <DateWidget isHoliday={isHoliday} />,
    });
  }, [isHoliday]);

  const { isRefreshing, handleRefresh } = useRefresh(getDates);

  const onLayoutRootView = () => {
    if (appIsReady) SplashScreen.hide();
  };

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        contentContainerStyle={styles.contentContainer}
      >
        <Background isHoliday={isHoliday} holidayDesc={holidayDesc} />
        <StatusBar style="light" />
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
});
