export const getColor = (status: string) => {
  switch (status) {
    case "COMPLETED":
      return "contentAccentContentAccentGreen.main";
    case "PENDING":
      return "var(--yellow)";
    case "Failed":
      return "var(--red)";
    case "HISTORY_LINE":
      return "contentQuaternary.main";
    case "HISTORY_CIRCLE_STROKE":
      return "contentQuaternary.main";
    case "HISTORY_CIRCLE_FILL":
      return "backgroundDefault.main";
    default:
      return "var(--green)";
  }
};

export const getColorFromTheme = (theme: any, key: string) => {
  const keys = key.split(".");
  let colorValue = theme.palette;

  for (const k of keys) {
    colorValue = colorValue[k];
    if (!colorValue) break;
  }

  return colorValue || undefined;
};

export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
