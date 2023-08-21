import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import axios from "axios";

import Date from "./components/Date";

import {
  getGregorianToday,
  getJalaliToday,
  getHijriToday,
} from "./utils/dates";

// Keep the splash screen visible until resources are fetched
SplashScreen.preventAutoHideAsync();

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

      // Send request to check if today is a Jalali holiday
      try {
        const response = await axios.get(
          `https://holidayapi.ir/jalali/${getJalaliToday().brief}`
        );

        // Get the holiday event
        const holidayEvent = response.data?.events.find(
          (event) => event?.is_holiday
        );

        // Set the holiday's description
        if (holidayEvent !== undefined) {
          setHolidayDesc(holidayEvent?.description);
        } else {
          setHolidayDesc("");
        }

        // Set is holiday state based on response
        if (response.data?.is_holiday) {
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

  // Hide the splash screen after the root view has already performed layout
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // Return null if app is not ready to render
  if (!appIsReady) {
    return null;
  }

  return (
    <ImageBackground
      source={require("./assets/black_sand_dunes.jpg")}
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
});
