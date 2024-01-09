import { Routes, Route } from 'react-router-dom';

import { Template } from '../pages/Template';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Template />} />
    </Routes>
  );
}
