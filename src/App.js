import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import routes from './routes';
import Test from 'components/Test';

function App() {
  const { home } = routes;

  return (
    <Suspense fallback={<h2> Loading... </h2>}>
      <Routes>
        <Route path={home} element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
