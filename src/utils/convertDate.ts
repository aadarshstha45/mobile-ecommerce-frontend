export const convertDate = (date: Date | string) => {
  if (date instanceof Date) {
    return date.toISOString().split("T")[0];
  } else if (typeof date === "string") {
    return date;
  } else if (date === null) {
    return null;
  } else {
    throw new Error("Invalid date format");
  }
};
