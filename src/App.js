import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Disclaimer from './Disclaimer';
import Emergency from './Emergency';
import BodyPartSelection from './BodyPartSelection';
import Question from './Question';
import PTVisit from './PTVisit';
import RiceInstructions from './RiceInstructions';

function App() {
  return (
  <Router>
    <Routes>
    <Route exact path="/non-emergency-disclaimer" element={<Disclaimer />} />
    <Route path="/emergency" element={<Emergency />} />
    <Route path="/body-part-selection" element={<BodyPartSelection />} />
    <Route path="/question" element={<Question />} />
    <Route path="/physical-therapy-appointment" element={<PTVisit />} />
    <Route path="/rice-instructions" element={<RiceInstructions />} />
  </Routes>
</Router>

  );
}
// hi
export default App;
