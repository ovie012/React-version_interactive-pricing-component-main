import React from 'react';
import SignUpCardTop from './SignUpCardTop';
import SignUpCardBottom from './SignUpCardBottom';

function SignUpCard() {
  return (
    <>
        <div className="signup-card">
            <SignUpCardTop />
            <span className='span'></span>
            <SignUpCardBottom />
        </div>
    </>
  )
}

export default SignUpCard;