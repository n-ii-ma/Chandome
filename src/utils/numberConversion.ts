/** Convert numbers to Farsi. */
export default function convertToFarsi(str: string): string {
  // Type *Index Signature*
  const farsiDigits: { [index: string]: any } = [
    "۰",
    "۱",
    "۲",
    "۳",
    "۴",
    "۵",
    "۶",
    "۷",
    "۸",
    "۹",
  ];

  return str.replace(/\d/g, (x) => farsiDigits[x]);
}
