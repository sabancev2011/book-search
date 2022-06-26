
import { Header, Menu } from "./components"
import { Items, ItemCard } from "./pages"
import { Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="itemCard/:id" element={<ItemCard />} />
      </Routes>
    </>
  );
}

export default App;
