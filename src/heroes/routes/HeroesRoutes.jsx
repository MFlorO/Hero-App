import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components";
import { Dc, Hero, Marvel, Search } from "../pages";

const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<Marvel />} />
        <Route path="dc" element={<Dc />} />
        <Route path="search" element={<Search />} />
        <Route path="hero/:id" element={<Hero />} />

        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};

export default HeroesRoutes;
