import React from "react";
import brand from "./icon-brand-recognition.svg";
import detailed from "./icon-detailed-records.svg";
import customize from "./icon-fully-customizable.svg";

import "./copy.scss";

const Copy = () => {
  return (
    <div className="main-copy">
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <main>
        <section class="easybank-services">
          <div class="services-item-container">
            <div class="services-item">
              <div className="icon-background">
                <img src={brand} alt="online banking icon" />
              </div>

              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className="separator"></div>
            <div class="services-item detailed">
              <div className="icon-background">
                <img src={detailed} alt="simple budgeting icon" />
              </div>
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="separator"></div>
            <div class="services-item customize">
              <div className="icon-background">
                <img src={customize} alt="fast onboarding icon" />
              </div>
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Copy;
