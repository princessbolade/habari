import "./App.css";
import { Container } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import SubHeader from "./components/Subheader";
import Features from "./components/Features";
import Solutions from "./components/Solutions";
import Support from "./components/Support";
import ReadyForATrial from "./components/ReadyForATrial";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("NG");

  return (
    <Container
      minH={"100vh"}
      color="brand.100"
      px="40px"
      maxW="1320px"
      mx="auto"
      w="100vw"
      overflowX="hidden"
    >
      <NavBar language={language} setLanguage={setLanguage} as="navbar" />
      <Header />
      <SubHeader />
      <Features />
      <Solutions />
      <Support />
      <ReadyForATrial />
      <NavBar language={language} setLanguage={setLanguage} as="footer" />
    </Container>
  );
}

export default App;
