const initialState = {
  isConfirmShow: false,
  isPromptShow: false,
  recordID: '',
  insertedValue: ''
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
        ...state,
        isConfirmShow: false,
        recordID: action.payload
      };

    case 'SHOW_PROMPT':
      return {
        ...state,
        isPromptShow: action.payload
      };

    case 'INSERT_VALUE':
      return {
        ...state,
        insertedValue: action.payload
      };

    default:
      return state;
  }
};

export default modal;
