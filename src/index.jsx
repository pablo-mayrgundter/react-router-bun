import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import App from './App'


function Routed() {
  const nav = useNavigate();

  React.useEffect(() => {
    const referrer = document.referrer;
    if (referrer) {
      const path = new URL(document.referrer).pathname;
      if (path.length > 1) {
        nav(path);
      }
    }
  }, []);

  return (
    <Routes>
      <Route path="/*" element={<App/>}/>
    </Routes>
  )
}

export default function main() {
  render(
    <BrowserRouter>
      <Routed/>
    </BrowserRouter>, document.getElementById('root'))
}
