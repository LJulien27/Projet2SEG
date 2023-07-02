import './App.css';
import './index.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import fakeconsole from './sitephotos/fakeconsole.jpg'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [smShow, setSmShow] = useState(false);


    return ( 
        <div className="home">
            <div className="header">
                <h1>NEXGEN</h1>
            </div>
            <Button variant="primary" className="contact-button" onClick={handleShow}>
                About Us
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>NEXGEN</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>
                        NexGen is a leading innovator in the gaming industry, dedicated to providing an immersive gaming experience
                        like no other. With cutting-edge technology and a passion for gaming, NexGen creates state-of-the-art 
                        gaming consoles and develops captivating video game titles. Explore a world of limitless possibilities 
                        and embark on extraordinary gaming adventures with NexGen.
                    </p>
                    <p>
                        And here's contact information for support:
                    </p>
                    <p>
                        Support Contact:
                        Email: support@nexgen.com
                        Phone: 1-800-NEXGEN-HELP (1-800-639-4364)
                        Operating Hours: Monday to Friday, 9:00 AM - 6:00 PM (EST)
                    </p>
                </Offcanvas.Body>
            </Offcanvas>
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                    <Card.Title>NEXGEN NEXUS</Card.Title>
                    <Card.Text>
                        Introducing the NEXGEN Nexus, the latest innovation in gaming consoles from NEXGEN.
                        With the NEXGEN Nexus, we're redefining the gaming experience and pushing the boundaries of 
                        technology. Here are some exciting details about this cutting-edge console
                    </Card.Text>
                    <Card.Img variant="top" src={ fakeconsole } />
                    <Button onClick={() => setSmShow(true)} className="mt-2" variant="outline-primary">Know more</Button>
                    <Modal
                        size="sm"
                        show={smShow}
                        onHide={() => setSmShow(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Small Modal
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            There would be more inforation in here and potentially a link to a video or
                            something along those lines
                        </Modal.Body>
                    </Modal>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Home;