import { About, Footer, Header, Testimonials, Work, Skills } from "./container";
import { Navbar } from "./components";
import { useSetWebsiteHeader } from "./hooks";

import "./App.scss";
// import "./App.css";

function App() {
  useSetWebsiteHeader();
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
