import axios from 'axios';

const RANDOM_GREETING = 'greeting/RANDOM_GREETING';
const baseurl = 'http://127.0.0.1:3000/greetings';

const initialState = [];

export const randomGreeting = () => async (dispatch) => {
  const response = await axios.get(baseurl);
  dispatch({
    type: RANDOM_GREETING,
    payload: response.data,
  });
};

// Reducer
const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case RANDOM_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
