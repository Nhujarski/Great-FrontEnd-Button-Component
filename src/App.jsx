import React from 'react';
import Button from './components/Button/Button';
import './App.css';

function App() {
  return (
    <div className='button-container'>
      <div className='button-row'>
        <Button size='medium' style='primary' buttonLabel={'Button CTA'} />
        <Button size='large' style='primary' buttonLabel={'Button CTA'} />
        <Button size='xl' style='primary' buttonLabel={'Button CTA'} />
        <Button size='xxl' style='primary' buttonLabel={'Button CTA'} />
        <Button size='iconOnly' style='primary' />
      </div>
      <div className='button-row'>
        <Button size='medium' style='secondary' buttonLabel={'Button CTA'} />
        <Button size='large' style='secondary' buttonLabel={'Button CTA'} />
        <Button size='xl' style='secondary' buttonLabel={'Button CTA'} />
        <Button size='xxl' style='secondary' buttonLabel={'Button CTA'} />
        <Button size='iconOnly' style='secondary' />
      </div>
      <div className='button-row'>
        <Button size='medium' style='tertiary' buttonLabel={'Button CTA'} />
        <Button size='large' style='tertiary' buttonLabel={'Button CTA'} />
        <Button size='xl' style='tertiary' buttonLabel={'Button CTA'} />
        <Button size='xxl' style='tertiary' buttonLabel={'Button CTA'} />
        <Button size='iconOnly' style='tertiary' />
      </div>
      <div className='button-row'>
        <Button size='medium' style='linkColor' buttonLabel={'Button CTA'} />
        <Button size='large' style='linkColor' buttonLabel={'Button CTA'} />
        <Button size='xl' style='linkColor' buttonLabel={'Button CTA'} />
        <Button size='xxl' style='linkColor' buttonLabel={'Button CTA'} />
        <Button size='iconOnly' style='linkColor' />
      </div>
      <div className='button-row'>
        <Button size='medium' style='linkGray' buttonLabel={'Button CTA'} />
        <Button size='large' style='linkGray' buttonLabel={'Button CTA'} />
        <Button size='xl' style='linkGray' buttonLabel={'Button CTA'} />
        <Button size='xxl' style='linkGray' buttonLabel={'Button CTA'} />
        <Button size='iconOnly' style='linkGray' />
      </div>
      <div className='button-row'>
        <Button size='medium' style='destructive' buttonLabel={'Button CTA'} />
        <Button size='large' style='destructive' buttonLabel={'Button CTA'} />
        <Button size='xl' style='destructive' buttonLabel={'Button CTA'} />
        <Button size='xxl' style='destructive' buttonLabel={'Button CTA'} />
        <Button size='iconOnly' style='destructive' />
      </div>
    </div>
  );
}

export default App;
