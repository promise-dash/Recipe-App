import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter } from "react-router-dom";
import Search from './components/Search';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <div style={{margin: "0 14%"}}>
        <Search />
        <Category />
        <Pages />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
