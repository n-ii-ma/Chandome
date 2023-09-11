/** Convert numbers to Farsi. */
export default function convertToFarsi(str: string): string {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return str.replace(/\d/g, (x) => farsiDigits[x]);
}
