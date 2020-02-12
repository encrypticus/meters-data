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

export {
  dataLoaded,
  dataRequested,
  emmitError
};
