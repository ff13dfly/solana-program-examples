import { Tabs,Tab} from 'react-bootstrap';

import Anchor from './anchor';
import Native from './native';
import Poseiden from './poseiden';
import Steel from './steel';

function Layout() {
  return (
    <Tabs defaultActiveKey="anchor" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="anchor" title="Anchor Framework">
        <Anchor />
      </Tab>
      <Tab eventKey="native" title="Rust Native">
        <Native />
      </Tab>
      <Tab eventKey="poseidon" title="Poseidon Framework">
        <Poseiden />
      </Tab>
      <Tab eventKey="steel" title="Steel Framework">
        <Steel />
      </Tab>
    </Tabs>
  )
}

export default Layout;
