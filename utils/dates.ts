import { format } from "date-fns-jalali";
import moment from "moment";
import momentHijri from "moment-hijri";

import convertToFarsi from "./numberConversion";

// Today's date
const today = new Date();

// Get today's date in Gregorian
export const getGregorianToday = (): string =>
  moment(today).format("D MMMM, YYYY");

// Get today's date in Jalali
export const getJalaliToday = (): { brief: string; verbose: string } => {
  const brief = format(today, "yyyy/MM/dd");
  const verbose = convertToFarsi(format(today, "eeee، d MMMM yyyy"));

  return {
    brief,
    verbose,
  };
};

// Get today's date in Hijri
export const getHijriToday = (): string =>
  convertToFarsi(momentHijri(today).format("iD iMMMM، iYYYY"));
