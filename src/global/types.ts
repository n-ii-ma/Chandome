export interface DateProps {
  /** Whether today is a Jalali holiday or not. */
  isHoliday: boolean;

  /** Jalali holiday description. */
  holidayDesc: string;
}

export interface BackgroundProps extends DateProps {}

export interface DateWidgetProps {
  /** Whether today is a Jalali holiday or not. */
  isHoliday: boolean;
}

export interface GetJalaliTodayArgs {
  /** Today in Jalali calendar with a yyyy/mm/dd format. */
  brief: string;

  /** Today in Jalali calendar with a detailed format. */
  verbose: string;
}
