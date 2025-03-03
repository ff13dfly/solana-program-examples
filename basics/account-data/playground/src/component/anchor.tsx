import { Col,Row,Form,InputGroup,Button } from 'react-bootstrap';

function Anchor() {
    return (
        <Row>
            <Col xxl={9} lg={9} md={9}>
                <Row>
                    <Col xxl={12} lg={12} md={12} >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                            Program address on Devnet
                            </InputGroup.Text>
                            <Form.Control id="basic-url" disabled aria-describedby="basic-addon3" />
                        </InputGroup>
                    </Col>

                    <Col xxl={6} lg={6} md={6} >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                            name:String
                            </InputGroup.Text>
                            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>
                    </Col>

                    <Col xxl={6} lg={6} md={6} >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                            house_number:U8
                            </InputGroup.Text>
                            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>
                    </Col>

                    <Col xxl={6} lg={6} md={6} >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                            street:String
                            </InputGroup.Text>
                            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>
                    </Col>

                    <Col xxl={6} lg={6} md={6} >
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                            city:String
                            </InputGroup.Text>
                            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>
                    </Col>
                    <Col xxl={9} lg={9} md={9} >

                    </Col>
                    <Col className='text-end' xxl={3} lg={3} md={3} >
                        <Button variant="primary">Call Program</Button>
                    </Col>
                </Row>
            </Col>
            <Col xxl={3} lg={3} md={3}>
                <Row>
                    <Col xxl={12} lg={12} md={12} >
                        <h5>History</h5>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
} 

export default Anchor;