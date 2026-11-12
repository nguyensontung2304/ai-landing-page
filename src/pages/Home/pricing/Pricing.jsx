import "./Pricing.scss";

export default function Pricing() {
  return (
      <div className="price container">
        <div className="price-title">
          <h2 className="title title--white">{"Get Started "}<span className="title title--violet">{"Now"}</span></h2>
          <p className="text text--lg text--light-white">{"Choose the plan that works best for you"}</p>
        </div>
        <div className="price-list">
          <div className="col-12 col-md-12 col-lg-5">
            <div className="price-list-item">
              <div className="price-list-item-title">
                <p>{"One Time Payment"}</p>
              </div>
              <div className="price-line"></div>
              <div className="price-list-item-old">
                <p>{"$247"}</p>
              </div>
              <div className="price-list-item-new">
                <p>{"Save $50!"}</p>
              </div>
              <button className="price-list-item-btn btn btn--md btn--gradient">{"Get Started"}</button>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-5">
            <div className="price-list-item">
              <div className="price-list-item-title">
                <p>{"3 Payments"}</p>
              </div>
              <div className="price-line"></div>
              <div className="price-list-item-old-2">
                <p>{"$99/Week*"}</p>
              </div>
              <div className="price-list-item-new">
                <p>{"Totalling $297"}</p>
              </div>
              <div className="price-list-item-new-payment"><span>{"* first payment due upfront"}</span></div>
              <button className="price-list-item-btn-2 btn btn--md btn--gradient">{"Get Started"}</button>
            </div>
          </div>
        </div>
      </div>
  );
}
