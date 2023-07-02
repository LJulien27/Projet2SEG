import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Minecraft from './sitephotos/Minecraft.jpg';
import Fifa23 from './sitephotos/Fifa23.jpg';
import Rocket from './sitephotos/RocketLeague.jpg';
import Cod from './sitephotos/Codwarzone2.jpg';
import PurchaseForm from './PurchaseForm';

const Games = ( {isLoggedIn} ) => {
    const cardData = [
        {
            id: 1,
            title: 'Minecraft',
            gameType: 'Adventure',
            description: 'Some quick example text for description and details about the game in question.',
            ratingsUsers: '4.7 Star Rating 140M Users Worldwide',
            price: 19.99,
            image: Minecraft,
        },
        {
            id: 2,
            title: 'Fifa 23',
            gameType: 'Sport',
            description: 'Some quick example text for description and details about the game in question.',
            ratingsUsers: '4.2 Star Rating 52M Users Worldwide',
            price: 79.99,
            image: Fifa23,
        },
        {
            id: 3,
            title: 'Rocket League',
            gameType: 'Sport',
            description: 'Some quick example text for description and details about the game in question.',
            ratingsUsers: '4.9 Star Rating 93M Users Worldwide',
            price: 0.00,
            image: Rocket,
        },
        {
            id: 4,
            title: 'Call Of Duty Warzone 2',
            gameType: 'FPS',
            description: 'Some quick example text for description and details about the game in question.',
            ratingsUsers: '3.9 Star Rating 67M Users Worldwide',
            price: 79.99,
            image: Cod,
        },
    ];

    const [selectedGameType, setSelectedGameType] = useState('All');
    const [overFifty, setOverFifty] = useState(false);

    const navigate = useNavigate();
    const handlePurchase = () => {
        if (!isLoggedIn) {
            alert('Please sign in to make a purchase.');
        } else {
            navigate('/purchase');
        }
    };

    const handleGameTypeChange = (gameType) => {
        setSelectedGameType(gameType);
    };

    const handleCheckBoxChange = () => {
        setOverFifty(!overFifty);
    };

    let filteredCards = selectedGameType === 'All' ? cardData : cardData.filter(card => card.gameType === selectedGameType);

    if (overFifty) {
        filteredCards = filteredCards.filter(card => card.price <= 50);
    }

    return (
        <div className="games">
            <h1>Look Through our Games</h1>
            <div className="mb-4">
                <Dropdown>
                    <Dropdown.Toggle variant="success">
                        Sort by Game Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item active={selectedGameType === 'All'} onClick={() => handleGameTypeChange('All')}>All</Dropdown.Item>
                        <Dropdown.Item active={selectedGameType === 'Adventure'} onClick={() => handleGameTypeChange('Adventure')}>Adventure</Dropdown.Item>
                        <Dropdown.Item active={selectedGameType === 'Sport'} onClick={() => handleGameTypeChange('Sport')}>Sport</Dropdown.Item>
                        <Dropdown.Item active={selectedGameType === 'FPS'} onClick={() => handleGameTypeChange('FPS')}>FPS</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="d-flex align-items-center justify-content-center">
                    <Form.Group className="mt-2">
                        <Form.Check
                            type="switch"
                            label="Show Only Games under $50"
                            checked={overFifty}
                            onChange={handleCheckBoxChange}
                        />
                    </Form.Group>
                </div>
            </div>
            <div className="card-container justify-content-center">
                {filteredCards.map((card) => (
                    <Card key={card.id} style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={ card.image }/>
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.description}</Card.Text>
                            <Card.Text className="ratings" >{card.ratingsUsers}</Card.Text>
                            <Button variant="primary" onClick={ handlePurchase }>${card.price} Purchase</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Games;