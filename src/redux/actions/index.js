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
  addStation
};
