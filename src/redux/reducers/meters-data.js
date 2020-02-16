const initialState = {
  data: [],
  isLoading: true,
  hasError: false
};


const metersData = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        data: [],
        isLoading: true,
        hasError: false
      };

    case 'FETCH_DATA_SUCCESS':
      return {
        data: action.payload,
        isLoading: false,
        hasError: false
      };

    case 'FETCH_DATA_FAILURE':
      return {
        data: [],
        isLoading: false,
        hasError: true
      };

    default:
      return state;
  }
};

export default metersData;
