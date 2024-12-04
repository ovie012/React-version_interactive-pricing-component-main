import React from 'react'

function SignUpCardBottom() {
  const benefits = [
    'Unlimited websites', '100% data ownership', 'Email reports'
  ];


  return (
    <>
        <div className="signup-card-bottom">
            <section>
              {benefits.map((item, index) => (
                <div key={index}>
                  <img src="/icon-check.svg" alt="check icon" />
                  <p>{item}</p>
                </div>
              ))}
            </section>
            <button>Start my trial</button>
        </div>
    </>
  )
}

export default SignUpCardBottom;