export const loopObject = (data) => {
  const r = {};
  if (!data) return {};
  for (const [key, value] of Object.entries(data)) {
    if (value) {
      r[key] = value;
    }
  }

  return r;
};
