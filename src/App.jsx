import { useState } from 'react';
import { AppContext, AppProvider } from '../ui/AppProvider';
import SignUpText from '../ui/SignUpText';
import SignUpCard from '../ui/SignUpCard';
import './App.css'

function InnerApp() {

  return (
    <>
      <div className="app">
        <img className='banner' src="/bg-pattern.svg" alt="background banner" />
        <SignUpText />
        <SignUpCard />
      </div>
    </>
  )
}

function App() {

  return (
    <>
      <AppProvider>
        <InnerApp />
      </AppProvider>
    </>
  )
}

export default App;
