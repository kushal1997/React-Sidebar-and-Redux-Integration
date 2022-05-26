import React from "react";
import { useSelector } from "react-redux";

function Messages() {
  const dashboardData = useSelector(
    (state) => state?.DashboardReducer?.dashboardData
  );
  console.log("dashboard data is....", dashboardData);
  return (
    <>
      <div>{dashboardData}</div>
      <div className="message">Message Page</div>
    </>
  );
}

export default Messages;
