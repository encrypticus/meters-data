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

export {
  fetchMetersData,
  deleteRow
};
