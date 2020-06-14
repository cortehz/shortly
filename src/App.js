import React, { useState, useRef } from "react";
import "./App.scss";
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ShortenerSection from "./components/ShortenerSection/ShortenerSection";
import { useOnClickOutside } from "./hooks";

function App() {
  // const initialCount = () => window.localStorage.getItem("data");

  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [idNumber, setIdNumber] = useState(0);
  // const [query, setQuery] = useState("");
  // const [search, setSearch] = useState("");

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="App">
      <div ref={node}>
        <NavBar open={open} setOpen={setOpen} />
      </div>
      <Hero />

      <ShortenerSection
        data={data}
        setData={setData}
        query={query}
        setQuery={setQuery}
        idNumber={idNumber}
        setIdNumber={setIdNumber}
      />
    </div>
  );
}

export default App;
