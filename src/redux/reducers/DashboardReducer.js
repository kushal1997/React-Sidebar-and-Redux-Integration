import * as types from "../constants";

const initialState = {
  userInfo: null,
  fetchLoginUsersData: false,
  dashboardData: null,
};

export default function DashboardReducer(state = initialState, actions) {
  switch (actions.type) {
    case types.DASHBOARD_REQUEST:
      return {
        ...state,
        fetchLoginUsersData: false,
      };

    case types.DASHBOARD_REQUEST_SUCCESS:
      console.log("data is....", actions?.data);
      // const userInfo = actions && actions.params && actions.params.userInfo ? actions.params.userInfo : null
      const dashboardData = actions && actions?.data ? actions?.data : null;
      return {
        ...state,
        fetchUsersData: true,
        dashboardData: dashboardData,
        // userInfo
      };

    case types.DASHBOARD_REQUEST_FAILURE:
      return {
        ...state,
        fetchUsersData: true,
        userInfo: null,
        dashboardData: null,
      };

    default:
      return state;
  }
}
