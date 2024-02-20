import React from "react";
import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/new-meetup" element={<NewMeetup />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
