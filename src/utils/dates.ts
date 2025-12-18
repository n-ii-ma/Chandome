import { format } from "date-fns-jalali";
import moment from "moment";
import momentHijri from "moment-hijri";

import type { GetJalaliTodayArgs } from "@/global/types";

import convertToFarsi from "./numberConversion";

const today = new Date();

export const getGregorianToday = (): string =>
  moment(today).format("D MMMM, YYYY");

export const getJalaliToday = (): GetJalaliTodayArgs => {
  const brief = format(today, "yyyy/MM/dd");
  const verbose = convertToFarsi(format(today, "eeee، d MMMM yyyy"));

  return {
    brief,
    verbose,
  };
};

export const getHijriToday = (): string =>
  convertToFarsi(momentHijri(today).format("iD iMMMM، iYYYY"));
