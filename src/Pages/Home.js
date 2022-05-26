import React from "react";
import { DashboardData } from "../redux/actions/dashboardAction";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  dispatch(DashboardData());

  return <div className="home">Home Page</div>;
}

export default Home;
