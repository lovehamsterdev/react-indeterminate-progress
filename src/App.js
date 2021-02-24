import { useEffect, useState } from "react";
import Loader from "./Loader";
import ProgressBar from "./ProgressBar";
import ProgressRing from "./ProgressRing";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let it;
    if (show) {
      it = setTimeout(() => {
        setShow(false);
      }, 2000);
    }
    return clearTimeout(it);
  }, [show]);

  return (
    <>
      <div style={{ width: 300 }}>
        <ProgressBar />
        <ProgressBar color="purple" />
        <ProgressRing size={100} />
        <ProgressRing color="purple" size={100} />
      </div>
      <div>
        <button onClick={() => setShow(true)}>Show loader</button>
        {show && <Loader />}
      </div>
    </>
  );
}

export default App;
