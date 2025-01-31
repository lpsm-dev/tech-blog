/**
 * Get a valid timestamp from a Date object
 * If the date is null, undefined, or invalid, it returns 0
 * @param date - The Date object to extract the timestamp from
 * @returns A valid timestamp (milliseconds since Unix epoch) or 0 if invalid
 */
export const getValidTimestamp = (date: Date | null | undefined): number => {
  if (!date) return 0;
  const timestamp = date.getTime();
  return isNaN(timestamp) ? 0 : timestamp;
};
