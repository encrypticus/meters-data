const dataLoaded = (newData) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: newData
  };
};

const dataRequested = () => {
  return {
    type: 'FETCH_DATA_REQUEST'
  };
};

const emmitError = () => {
  return {
    type: 'FETCH_DATA_FAILURE'
  };
};

const showConfirm = (show) => {
  return {
    type: 'SHOW_CONFIRM',
    payload: show
  };
};

const showPrompt = (show) => {
  return {
    type: 'SHOW_PROMPT',
    payload: show
  };
};

const saveRecordID = (recordID) => {
  return {
    type: 'SAVE_RECORD_ID',
    payload: recordID
  };
};

const insertValue = (value) => {
  return {
    type: 'INSERT_VALUE',
    payload: value
  };
};

const fetchMetersData = (dispatch, dataService) => () => {
  dispatch(dataRequested());

  dataService.getMetersData()
    .then(data => dispatch(dataLoaded(data)))
    .catch(() => dispatch(emmitError()));
};

const deleteRow = (dispatch, dataService) => (id) => {
  dispatch(dataRequested());

  dataService.deleteRow(id)
    .then(() => {
      dataService.getMetersData()
        .then(data => dispatch(dataLoaded(data)))
        .catch(() => dispatch(emmitError()));
    })
    .catch(() => dispatch(emmitError()));
};

const changeValue = (dispatch, dataService) => (id, value) => {
  dispatch(dataRequested());

  dataService.changeValue(id, value)
    .then(() => {
      dataService.getMetersData()
        .then(data => dispatch(dataLoaded(data)))
        .then(() => dispatch(insertValue('')))
        .catch(() => dispatch(emmitError()));
    })
    .catch(() => dispatch(emmitError()));
};

const addStation = (dispatch, dataService) => (requestBody) => {
  dispatch(dataRequested());

  dataService.addStation(requestBody)
    .then(() => {
      dataService.getMetersData()
        .then(data => dispatch(dataLoaded(data)))
        .catch(() => dispatch(emmitError()));
    })
    .catch(() => dispatch(emmitError()));
};

export {
  fetchMetersData,
  deleteRow,
  changeValue,
  addStation,
  showConfirm,
  showPrompt,
  saveRecordID,
  insertValue
};
