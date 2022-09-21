const dogDataReducer=(state=[], action)=>{
    switch (action.type) {
      case 'DOG_DATA':
        return action.payload
      default:
        return state
    }
  }

  export default dogDataReducer;
  