import { BrowserRouter as Routeur, Routes, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import Equipment from './containers/Equipment';
import Calendar from './containers/Calendar';
import User from './containers/User';
import Error from './containers/Error';

function App() {
  return (
    <Routeur>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/equipements' element={<Equipment />} />
        <Route path='/calendrier' element={<Calendar />} />
        <Route path='/utilisateurs' element={<User />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Routeur>
  )
}

export default App