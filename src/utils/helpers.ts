export const trimText = (text: string, chartersCount: number): string => {
  if (text.length <= chartersCount) {
    return text;
  } else {
    return text.slice(0, chartersCount) + '...';
  }
};
