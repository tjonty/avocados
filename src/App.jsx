import { Suspense, useEffect } from "react";
import Avocados from "./Avocados";
import Content from "./Content";
import { trackEvent } from "./lib/firebase";

export default function App() {

  useEffect(() => {
    const url = window.location?.pathname + window.location?.search || '';
    trackEvent('page_view', {
      page_path: url,
      page_title: "Home Page",
      page_location: window.location?.href || ''
    });
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <Avocados />
      </Suspense>
      <Content />
    </>
  );
}

