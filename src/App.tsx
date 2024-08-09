import type { ReactElement } from "react";
import { Layout } from "./layout/Layout";
import { Header } from "./areas/Header";
import { Footer } from "./areas/Footer";
import { Main } from "./areas/Main";

function App(): ReactElement {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Main />
    </Layout>
  );
}

export default App;
