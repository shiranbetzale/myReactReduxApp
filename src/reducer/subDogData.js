const subDogDataReducer=(state=[], action)=>{
    switch (action.type) {
      case 'SUB_DOG_DATA':
        return action.payload
      default:
        return state
    }
  }

  export default subDogDataReducer;
  