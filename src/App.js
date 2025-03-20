import React, { useState, useEffect } from "react";
import FlipCoin from "./components/FlipCoin";
import Spinner from "./components/Spinner";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
      <main className="App py-5 animated-bg">
        <section className="container position-absolute top-50 start-50 translate-middle p-5 text-center">
          <div className="row">
            {loading ? <Spinner /> : <FlipCoin />}
          </div>
      </section>
    </main>
  );
};

export default App;
