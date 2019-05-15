const defaultState = "";

const putValueReducer = (state = defaultState, action) => {
  if(action.type === "PUT_VALUE") {
    return action.value;
  }

  return state;
}

export default putValueReducer;