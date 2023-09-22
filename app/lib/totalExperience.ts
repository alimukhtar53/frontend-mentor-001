export function getTotalExperience(): number {
  const startDate = new Date(2021, 1); // February is month 1 (0-indexed)
  const currentDate = new Date();
  const diffInMilliseconds = currentDate.getTime() - startDate.getTime();
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Accounting for leap years

  return Number(diffInYears.toFixed(1));
}
