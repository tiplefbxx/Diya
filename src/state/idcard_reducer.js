const defaultState = {
    birthday: {
        day: 0,
        month: 0,
        year: 0,
    },
    idCardFullName: 'uknown uknown uknown',
    idCardNumber: 0,
    
}

export const idCardReducer = (state = defaultState, action) => {
   switch (action.type) {
       case 'SET_IDCARD_INFO':
           return {
            ...state,
           }

       default: return state
   }
}





