const INTIAL_STATE = {
  timeTable: []
};

export default function(state = INTIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_TIME_TABLE':
      return [action.payload.data, ...state];
  }
  return state;
}