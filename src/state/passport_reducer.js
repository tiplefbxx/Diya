import defaultPhoto from '../texure/testimg.jpg';

const defaultState = {
    birthday: {
        day: 0,
        month: 0,
        year: 0,
    },
    passwordNumber: 0,
    PassportfullName: 'uknown uknown uknown',
    photo: defaultPhoto,
}


export const passportReducer = (state = defaultState, action) => {
   switch (action.type) {
       case 'SET_PASSPORT_INFO':
           return {
            ...state,
           }

       default: return state
   }
}





