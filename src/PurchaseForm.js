import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


const PurchaseForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleExpiryDateChange = (e) => {
        setExpiryDate(e.target.value);
    };

    const handleCVVChange = (e) => {
        setCVV(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const navigate = useNavigate();
    const handleCheckout = (e) => {
        e.preventDefault();
        if (cardNumber && expiryDate && cvv) {
            // Process the checkout logic here
            alert('Checkout successful! Thank you random_username45');
            navigate('/Games');
        } else {
            alert('Please fill in all the required fields.');
        }
    };

    return (
        <div>
            <h2>Purchase Form</h2>
            <h4>Hello random_username45</h4>
            <h4>Fill in The Following Information</h4>
            <div className="input-group my-3">
                <div className="input-group-text" style={{ width: '130px' }}>
                Card Number:
                </div>
                <input
                type="text"
                className="form-control border-primary"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                />
            </div>

            <div className="input-group my-3">
                <div className="input-group-text" style={{ width: '130px' }}>
                    Expiry Date:
                </div>
                <input
                    type="text"
                    className="form-control border-primary"
                    id="cardDate"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                />
            </div>

            <div className="input-group my-3">
                <div className="input-group-text" style={{ width: '130px' }}>
                    CVV:
                </div>
                <input
                    type="text"
                    placeholder="(number on the back of your credit card)"
                    className="form-control border-primary"
                    id="cardCCV"
                    value={cvv}
                    onChange={handleCVVChange}
                />
            </div>

            <div className="input-group my-3 justify-content-center">
                <Form>
                    <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label="Download game to console"
                    />
                </Form>
            </div>

            <button className="btn btn-primary" onClick={handleCheckout}>
                Checkout
            </button>
        </div>
    );
};

export default PurchaseForm;