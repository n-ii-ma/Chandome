import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { getJalaliToday } from "./dates";

const STORAGE_KEY = "@Holiday";

/** Callback to send request to check if today is a Jalali holiday */
const checkJalaliHolidayAsync = async () => {
  try {
    const response = await axios.get(
      `https://holidayapi.ir/jalali/${getJalaliToday().brief}`,
      { timeout: 3000 },
    );
    const jsonHoliday = JSON.stringify(response.data);

    await AsyncStorage.setItem(STORAGE_KEY, jsonHoliday);
  } catch (error) {}
};

/** Callback to get holiday data from Async Storage */
const getHolidayDataAsync = async () => {
  try {
    await checkJalaliHolidayAsync();

    const jsonHoliday = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonHoliday !== null ? JSON.parse(jsonHoliday) : null;
  } catch (error) {}
};

export default getHolidayDataAsync;
