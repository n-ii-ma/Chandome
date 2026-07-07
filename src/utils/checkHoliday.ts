import { format } from "date-fns-jalali";

import holidays from "@/assets/data/holidays.json";

export const getHolidayData = () => {
  const today = new Date();
  const dayId = format(today, "yyyyMMdd");
  const events = (holidays as Record<string, string[]>)[dayId];
  const isFriday = today.getDay() === 5; // 5 corresponds to Friday in JavaScript's getDay() method

  return {
    isHoliday: events !== undefined || isFriday,
    cause: events?.[0] ?? "",
  };
};
