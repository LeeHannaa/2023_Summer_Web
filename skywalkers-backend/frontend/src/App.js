import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddNewsPage from './pages/AddNewsPage';
import AllNewsListPage from './pages/AllNewsListPage';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

function App() {
  return (
      <>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/addNews" element={<AddNewsPage />} />
            <Route path="/allNews" element={<AllNewsListPage />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
