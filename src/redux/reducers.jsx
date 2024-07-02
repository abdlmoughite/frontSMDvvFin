
const initialState = {
   test:'false',
  
  };
  
  const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case 'test':
            return{
                ...state,
                test:action.payload,
                
            }

       
 default:
        return state;
    }
  };
  
  export default clientReducer;