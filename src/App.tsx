import type { ReactElement } from "react";
import { Layout } from "./components/layout/Layout";
import { Footer } from "./components/areas/Footer";
import { Header } from "./components/areas/Header";
import { Main } from "./components/areas/Main";

function App(): ReactElement {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Main />
    </Layout>
  );
}

export default App;
