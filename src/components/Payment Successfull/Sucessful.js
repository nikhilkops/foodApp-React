import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './Sucessful.css';

function Sucessfull() {
  const searchQuery = useSearchParams()[0];
  return (
    <div className="successful-container">
      <div className="container">
        <div className="printer-top"></div>

        <div className="paper-container">
          <div className="printer-bottom"></div>

          <div className="paper">
            <div className="main-contents">
              <div className="success-icon">&#10004;</div>
              <div className="success-title">Payment Complete</div>
              <div className="success-description">
                Your payment has been successfully processed. If you have any questions, our support team is here to help.
              </div>
              <div className="order-details">
                <div className="order-number-label">Order Number</div>
                <div className="order-number-label">Order Number</div>
                <div className="order-number">{searchQuery.get("reference")}</div>
              </div>
              <div className="order-footer">Thank you for choosing OmniFood!</div>
            </div>
            <div className="jagged-edge"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sucessfull;
