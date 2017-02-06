function test(state = [], action) {
  switch(action.type) {
    case 'SET_TEST':

    return {
      ...state,
      ...action.test
    };

    default:
      return state;
  }
}

export default test;
