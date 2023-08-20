import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

import Date from "./components/Date";

import {
  getGregorianToday,
  getJalaliToday,
  getHijriToday,
} from "./utils/dates";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [gregorianToday, setGregorianToday] = useState(null); // Today in Gregorian
  const [jalaliToday, setJalaliToday] = useState(null); // Today in Jalali
  const [hijriToday, setHijriToday] = useState(null); // Today in Hijri
  const [isHoliday, setIsHoliday] = useState(false); // Is today a holiday

  // Load data
  useEffect(() => {
    setGregorianToday(getGregorianToday());
    setJalaliToday(getJalaliToday().verbose);
    setHijriToday(getHijriToday());

    isHolidayAsync();
  }, []);

  // Send request to check if today is a Jalali holiday
  const isHolidayAsync = async () => {
    try {
      const response = await fetch(
        `https://holidayapi.ir/jalali/${getJalaliToday().brief}`
      );
      const data = await response.json();

      // Set is holiday state based on response
      if (data?.is_holiday) {
        setIsHoliday(true);
      } else {
        setIsHoliday(false);
      }
    } catch (error) {
    } finally {
      await SplashScreen.hideAsync();
    }
  };

  return (
    <ImageBackground
      source={require("./assets/black_sand_dunes.jpg")}
      style={styles.container}
      resizeMode="cover"
      alt="Black sand dunes"
    >
      <Date
        gregorianToday={gregorianToday}
        jalaliToday={jalaliToday}
        hijriToday={hijriToday}
        isHoliday={isHoliday}
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
