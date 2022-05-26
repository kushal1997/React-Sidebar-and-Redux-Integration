import * as types from "../constants";

export const DashboardData = () => async (dispatch) => {
  await dispatch({
    type: types.DASHBOARD_REQUEST_SUCCESS,
    data: "SUCESSFULLY ADDED DASHBOARD DATA INTO REDUCER.........",
  });
};
