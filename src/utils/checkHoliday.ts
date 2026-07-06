import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { getJalaliToday } from "./dates";

const STORAGE_KEY = "@Holiday";

const checkJalaliHolidayAsync = async () => {
  const response = await axios.get(
    `https://holidayapi.ir/jalali/${getJalaliToday().brief}`,
    { timeout: 3000 },
  );

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(response.data));
  return response.data;
};

export const getHolidayDataAsync = async () => {
  try {
    return await checkJalaliHolidayAsync();
  } catch (error) {
    // Try to get data from cache if fetch fails
    try {
      const cachedData = await AsyncStorage.getItem(STORAGE_KEY);
      return cachedData !== null ? JSON.parse(cachedData) : null;
    } catch (error) {
      return null;
    }
  }
};
