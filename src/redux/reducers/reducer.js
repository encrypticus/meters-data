const initialState = {
  data: [],
  isLoading: true,
  hasError: false,
  tpNumbers: ['309', '310', '311', '312', '313', '314'],
  countNumbers: {
    tp309: ['100964', '160000'],
    tp310: ['215110', '995258', '19250', '114489'],
    tp311: ['215933', '516465'],
    tp312: ['820943', '835057'],
    tp313: ['20297549'],
    tp314: ['20309187']
  }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        data: [],
        isLoading: true,
        hasError: false
      };

    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        hasError: false
      };

    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        data: [],
        isLoading: false,
        hasError: true
      };

    default:
      return state;
  }
};

export default reducer;
