export const addCompanyToFavorite = (companyToAdd) => ({
  type: "ADD_COMPANY_TO_FAVORITE",
  payload: companyToAdd,
});

export const removeCompanyFromFavorite = (index) => ({
  type: "REMOVE_COMPANY_FROM_FAVORITE",
  payload: index,
});

export const fillSearchResults = (searchString) => {
  return async (dispatch) => {
    const baseUrl = "https://strive-jobs-api.herokuapp.com/jobs?search=";
    try {
      let response = await fetch(baseUrl + searchString );
      if (response.ok) {
        let data = await response.json();
        setTimeout(() => {
          dispatch(
            {
              type: "FILL_RESULTS_LOADING",
              payload: false,
            },
            1000
          );
          dispatch({
            type: "FILL_RESULTS_ERROR",
            payload: false,
          });
          dispatch({
            type: "FILL_RESULTS",
            payload: data,
          });
        });
      } else {
        console.log("error");
        setTimeout(() => {
          dispatch({
            type: "FILL_RESULTS_LOADING",
            payload: false,
          });
        }, 1000);
        setTimeout(() => {
          dispatch({
            type: "FILL_RESULTS_ERROR",
            payload: true,
          });
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        dispatch({
          type: "FILL_RESULTS_LOADING",
          payload: false,
        });
      }, 1000);
      setTimeout(() => {
        dispatch({
          type: "FILL_RESULTS_ERROR",
          payload: true,
        });
      }, 1000);
    }
  };
};
