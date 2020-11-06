const store = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "POWEROF":
      return state * state;
    case "TOZERO":
      return 0;
    case "TOINPUT":
      return (state = +action.payload);
    default:
      return state;
  }
};

export default store;
