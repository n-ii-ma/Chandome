import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, Text } from "react-native";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { requestWidgetUpdate } from "react-native-android-widget";
import { ms } from "react-native-size-matters";

import {
  getGregorianToday,
  getJalaliToday,
  getHijriToday,
} from "@/utils/dates";
import getHolidayDataAsync from "@/utils/checkHoliday";
import { version } from "package.json";

import Date from "@/components/Date";
import DateWidget from "@/components/DateWidget";

SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible until resources are fetched
SplashScreen.setOptions({ fade: true });

const App = () => {
  const [gregorianToday, setGregorianToday] = useState(""); // Today in Gregorian
  const [jalaliToday, setJalaliToday] = useState(""); // Today in Jalali
  const [hijriToday, setHijriToday] = useState(""); // Today in Hijri
  const [isHoliday, setIsHoliday] = useState(false); // Is today a holiday
  const [holidayDesc, setHolidayDesc] = useState(""); // Holiday description
  const [appIsReady, setAppIsReady] = useState(false); // Is app ready to render

  // Load data
  useEffect(() => {
    async function prepare() {
      // Load dates
      setGregorianToday(getGregorianToday());
      setJalaliToday(getJalaliToday().verbose);
      setHijriToday(getHijriToday());

      // Handle Jalali holiday
      try {
        const jalaliHoliday = await getHolidayDataAsync();

        // Get the holiday event
        const holidayEvent = jalaliHoliday?.events.find(
          (event: any) => event?.is_holiday,
        );

        // Set the holiday's description
        if (holidayEvent !== undefined) {
          setHolidayDesc(holidayEvent?.description);
        } else {
          setHolidayDesc("");
        }

        // Set is holiday state based on response
        if (jalaliHoliday?.is_holiday) {
          setIsHoliday(true);
        } else {
          setIsHoliday(false);
        }
      } catch (error) {
      } finally {
        // Tell the application to render
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

  // Hide the splash screen after the root view has already performed layout
  const onLayoutRootView = useCallback(() => {
    if (appIsReady) SplashScreen.hide();
  }, [appIsReady]);

  // Return null if app is not ready to render
  if (!appIsReady) {
    return null;
  }

  return (
    <ImageBackground
      source={require("../../assets/images/black_sand_dunes.jpg")}
      style={styles.container}
      resizeMode="cover"
      alt="Black sand dunes"
      onLayout={onLayoutRootView}
    >
      <Date
        gregorianToday={gregorianToday}
        jalaliToday={jalaliToday}
        hijriToday={hijriToday}
        isHoliday={isHoliday}
        holidayDesc={holidayDesc}
      />
      <Text style={styles.versionTxt}>v{version}</Text>
      <StatusBar style="light" />
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  versionTxt: {
    fontFamily: "Vazirmatn-Regular",
    fontSize: ms(10),
    color: "grey",
    position: "absolute",
    bottom: 0,
  },
});
