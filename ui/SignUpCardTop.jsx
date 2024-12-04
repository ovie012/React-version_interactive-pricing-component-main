import React, { useContext, useRef, useState } from 'react';
import { AppContext } from './AppProvider';

function SignUpCardTop() {
  const { applyDiscount, discount, billData } = useContext(AppContext);
  const [sliderValue, setSliderValue] = useState(2);
  const sliderRef = useRef(null);
  const handleRef = useRef(null);

  const handleMouseMove = (e) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const handleRect = handleRef.current.getBoundingClientRect();
    
    const newLeft = Math.min(Math.max(e.clientX - sliderRect.left, 0), sliderRect.width);
    
    const newValue = Math.round((newLeft / sliderRect.width) * (billData.length - 1));
    setSliderValue(newValue);
  };

  const handleStartDrag = () => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.body.style.cursor = 'grabbing';
    handleStartDrag();
  };

  const handleMouseUp = () => {
    document.body.style.cursor = 'default';
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const amount = billData[sliderValue].amount;
  const finalPrice = discount ? (amount * 0.75).toFixed(2) : amount;

  return (
    <div className="signup-card-top">
      <section>
        <h4>{billData[sliderValue].pageViews} pageviews</h4>
        <h4><span>${finalPrice}</span> / month</h4>
      </section>

      <div ref={sliderRef} className="slider-track">
        <span style={{ width: `${(sliderValue / (billData.length - 1)) * 100}%` }}></span>
        
        <img
          ref={handleRef}
          src="/icon-slider.svg"
          alt="slider handle"
          style={{
            left: `${(sliderValue / (billData.length - 1)) * 100}%`,
          }}
          onMouseDown={handleMouseDown}
        />
      </div>

      <section>
        <h5>Monthly Billing</h5>
        <span onClick={() => applyDiscount()} className={discount ? 'active' : ''}></span>
        <h5>Yearly Billing</h5>
        <h6><p>-</p>25%<p>discount</p></h6>
      </section>
    </div>
  );
}

export default SignUpCardTop;