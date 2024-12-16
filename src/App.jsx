import { Suspense } from "react";
import Avocados from "./Avocados";
import Content from "./Content";

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Avocados />
      </Suspense>
      <Content />
    </>
  );
}

