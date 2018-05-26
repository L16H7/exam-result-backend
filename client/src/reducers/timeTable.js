export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case 'FETCH_TIME_TABLE':
      return [action.payload.data, ...state];
  }

  console.log(state);
  return state;
}