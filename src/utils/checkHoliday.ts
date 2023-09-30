import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { getJalaliToday } from "./dates";

// Send request to check if today is a Jalali holiday
const checkJalaliHolidayAsync = async () => {
  try {
    const response = await axios.get(
      `https://holidayapi.ir/jalali/${getJalaliToday().brief}`
    );

    // Save response in Async Storage
    const jsonHoliday = JSON.stringify(response.data);
    await AsyncStorage.setItem("@Holiday", jsonHoliday);
  } catch (error) {}
};

// Get holiday data from Async Storage
const getHolidayDataAsync = async () => {
  try {
    // Send request to check for Jalali holiday
    await checkJalaliHolidayAsync();

    // Read holiday data from Async Storage
    const jsonHoliday = await AsyncStorage.getItem("@Holiday");
    return jsonHoliday !== null ? JSON.parse(jsonHoliday) : null;
  } catch (error) {}
};

export default getHolidayDataAsync;
