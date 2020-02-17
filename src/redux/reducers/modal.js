const initialState = {
  isConfirmShow: false,
  recordID: ''
};

const modal = (state = initialState, action) => {
  switch (action.type) {

    case 'SHOW_CONFIRM':
      return {
        ...state,
        isConfirmShow: action.payload
      };

    case 'SAVE_RECORD_ID':
      return {
        isConfirmShow: false,
        recordID: action.payload
      };

    default:
      return state;
  }
};

export default modal;
