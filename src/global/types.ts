export interface DateProps {
  /**
   * Today's date in Gregorian calendar.
   */
  gregorianToday: string;

  /**
   * Today's date in Jalali calendar.
   */
  jalaliToday: string;

  /**
   * Today's date in Hijri calendar.
   */
  hijriToday: string;

  /**
   * Whether today is a Jalali holiday or not.
   */
  isHoliday: boolean;

  /**
   * Jalali holiday description.
   */
  holidayDesc: string;
}

export interface DateWidgetProps {
  /**
   * Whether today is a Jalali holiday or not.
   */
  isHoliday: boolean;
}

export interface GetJalaliTodayArgs {
  /**
   * Today in Jalali calendar with a yyyy/mm/dd format.
   */
  brief: string;

  /**
   * Today in Jalali calendar with a detailed format.
   */
  verbose: string;
}
