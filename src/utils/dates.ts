import { gregorianToHijri } from "@tabby_ai/hijri-converter";
import { format } from "date-fns-jalali";

import type { GetJalaliTodayArgs } from "@/global/types";

import convertToFarsi from "./numberConversion";

const today = new Date();

const GREGORIAN_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const HIJRI_MONTHS = [
  "محرم",
  "صفر",
  "ربیع‌الاول",
  "ربیع‌الثانی",
  "جمادی‌الاول",
  "جمادی‌الثانی",
  "رجب",
  "شعبان",
  "رمضان",
  "شوال",
  "ذی‌القعده",
  "ذی‌الحجه",
];

export const getGregorianToday = (): string => {
  const year = today.getFullYear();
  const month = GREGORIAN_MONTHS[today.getMonth()];
  const day = today.getDate();

  return `${month} ${day}, ${year}`;
};

export const getJalaliToday = (): GetJalaliTodayArgs => {
  const brief = format(today, "yyyy/MM/dd");
  const verbose = convertToFarsi(format(today, "eeee، d MMMM yyyy"));

  return {
    brief,
    verbose,
  };
};

export const getHijriToday = (): string => {
  const { year, month, day } = gregorianToHijri({
    year: today.getFullYear(),
    month: today.getMonth() + 1, // Month number in Javascript Date API is zero-based
    day: today.getDate(),
  });

  return convertToFarsi(`${day} ${HIJRI_MONTHS[month - 1]}، ${year}`);
};
