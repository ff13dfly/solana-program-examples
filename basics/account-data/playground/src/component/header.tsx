import React from 'react';
import { Col,Row,Badge } from 'react-bootstrap';

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

function Header() {
  return (
    <Row className='pt-2'>
      <Col xxl={9} lg={9} md={9} >
        <h4>Solana Program Examples - Account Data</h4>
      </Col>
      <Col className='text-end' xxl={3} lg={3} md={3}>
        <WalletMultiButton />  
      </Col>
      <Col xxl={12} lg={12} md={12} >
        <Badge style={{marginRight:"10px"}}>Github</Badge>
        <a href="https://github.com/solana-developers/program-examples/tree/main/basics/account-data" target='_blank' rel="noreferrer">
          https://github.com/solana-developers/program-examples/tree/main/basics/account-data
        </a>
      </Col>
      <Col xxl={12} lg={12} md={12} >
        <hr />
      </Col>
     </Row>
    )
} 

export default Header;
