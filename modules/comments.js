const commentscount = async (arg) => {
  const values = await arg;
  if (Array.isArray(values)) {
    return values;
  }
  return 0;
};

export default commentscount;