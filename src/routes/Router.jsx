import React from "react";
import { useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import NewTask from "../pages/NewTask";
import NewList from "../pages/NewList";
import EditTask from "../pages/EditTask";
import SignUp from "../pages/SignUp";
import EditList from "../pages/EditList";

function Router() {
  // const auth = useSelector((state) => state.auth.isSignIn);
  console.log(useSelector((state) => state.auth.isSignIn));

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/task/new" element={<NewTask />} />
        <Route exact path="/list/new" element={<NewList />} />
        <Route exact path="/lists/:listId/tasks/:taskId" element={EditTask} />
        <Route exact path="/lists/:listId/edit" element={<EditList />} />
        {/* {auth ? (
          <>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/task/new" element={<NewTask />} />
            <Route exact path="/list/new" element={<NewList />} />
            <Route
              exact
              path="/lists/:listId/tasks/:taskId"
              element={EditTask}
            />
            <Route exact path="/lists/:listId/edit" element={<EditList />} />
          </>
        ) : (
          <Route element={<Navigate replace to="/signup" />} />
        )} */}
        <Route element={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
