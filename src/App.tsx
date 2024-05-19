import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Route path="/" element={<LandingPage />} />
          {/* </Suspense> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
