import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      {/* <SEO dynamicTitle="SheRise | Home" /> */}
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  )
}

export default App
