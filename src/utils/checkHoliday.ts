import axios from "axios";

import { getJalaliToday } from "./dates";

// Send request to check if today is a Jalali holiday
const checkJalaliHolidayAsync = async () => {
  try {
    const response = await axios.get(
      `https://holidayapi.ir/jalali/${getJalaliToday().brief}`
    );

    return response.data;
  } catch (error) {}
};

export default checkJalaliHolidayAsync;
