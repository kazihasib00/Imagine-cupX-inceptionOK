import React from 'react';
import './DonationForm.css'
function DonationForm() {
  return(
      <div>
         
          <div className="container">
              <div className="quickLinksWrap">
                  <form className="quickPayLinks" name="_xclick" action="https://www.paypal.com/us/cgi-bin/webscr" method="post">
                      <input type="hidden" name="cmd" defaultValue="_xclick" />
                      <input type="hidden" name="business" defaultValue="kfnunley@gmail.com" />
                      <input type="hidden" name="currency_code" defaultValue="USD" />
                      <input type="hidden" name="item_name" defaultValue="Custom Design Service" />
                      <input type="hidden" name="amount" defaultValue="$25.00" />
                      <button type="submit" className="customPayButton" name="submit" value="value" alt="Make payments with PayPal - it's fast, free and secure!">$25</button>
                  </form>
                  <form className="quickPayLinks" name="_xclick" action="https://www.paypal.com/us/cgi-bin/webscr" method="post">
                      <input type="hidden" name="cmd" defaultValue="_xclick" />
                      <input type="hidden" name="business" defaultValue="kfnunley@gmail.com" />
                      <input type="hidden" name="currency_code" defaultValue="USD" />
                      <input type="hidden" name="item_name" defaultValue="Custom Design Service" />
                      <input type="hidden" name="amount" defaultValue="$50.00" />
                      <button type="submit" className="customPayButton" name="submit" value="value" alt="Make payments with PayPal - it's fast, free and secure!">$50</button>
                  </form>
                  <form className="quickPayLinks" name="_xclick" action="https://www.paypal.com/us/cgi-bin/webscr" method="post">
                      <input type="hidden" name="cmd" defaultValue="_xclick" />
                      <input type="hidden" name="business" defaultValue="kfnunley@gmail.com" />
                      <input type="hidden" name="currency_code" defaultValue="USD" />
                      <input type="hidden" name="item_name" defaultValue="Custom Design Service" />
                      <input type="hidden" name="amount" defaultValue="$75.00" />
                      <button type="submit" className="customPayButton" name="submit" value="value" alt="Make payments with PayPal - it's fast, free and secure!">$75</button>
                  </form>
                  <form className="quickPayLinks" name="_xclick" action="https://www.paypal.com/us/cgi-bin/webscr" method="post">
                      <input type="hidden" name="cmd" defaultValue="_xclick" />
                      <input type="hidden" name="business" defaultValue="kfnunley@gmail.com" />
                      <input type="hidden" name="currency_code" defaultValue="USD" />
                      <input type="hidden" name="item_name" defaultValue="Custom Design Service" />
                      <input type="hidden" name="amount" defaultValue="$25.00" />
                      <button type="submit" className="customPayButton" name="submit" value="value" alt="Make payments with PayPal - it's fast, free and secure!">$100</button>
                  </form>
              </div>
              <h1> OR </h1>
              <p>Enter a custom price.</p>
              <form name="_xclick" action="https://www.paypal.com/us/cgi-bin/webscr" method="post">
                  <input type="hidden" name="cmd" defaultValue="_xclick" />
                  <input type="hidden" name="business" defaultValue="" />
                  <input type="hidden" name="currency_code" defaultValue="USD" />
                  <input type="hidden" name="item_name" defaultValue="Custom Design Service" />
                  <input type="number" name="amount" defaultValue placeholder="$0.00" />
                  <button type="submit" className="customPayButton" name="submit" value="value" alt="Make payments with PayPal - it's fast, free and secure!">Pay</button>
              </form>
              <p>Please make sure you've contacted me before making a payment.</p>
          </div>
         
      </div>

  );
}

export default DonationForm;
