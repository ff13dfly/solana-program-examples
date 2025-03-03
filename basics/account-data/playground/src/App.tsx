

import { Container } from 'react-bootstrap';
import WalletConnectionProvider from './solana/WalletProvider';

import './App.css';
import "@solana/wallet-adapter-react-ui/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './component/layout';
import Header from './component/header';

function App() {
  return (
    <WalletConnectionProvider>
      <Container>
        <Header/>
        <Layout />
      </Container>
    </WalletConnectionProvider>
  );
}

export default App;
