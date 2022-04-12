const strictEquals = (a, b) => {
  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  } else if (Object.is(a, 0) && Object.is(b, -0)) {
    return true;
  } else if (Object.is(a, -0) && Object.is(b, 0)) {
    return true;
  } else {
    return Object.is(a, b);
  }
};
// test command npx jest —watch
