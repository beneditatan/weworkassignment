import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header';
import {
    render,
    cleanup,
  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('header renders with correct styling', async () => {
    const text = 'hi'
    const size = '48'
    const align = 'left'
    const marginTop = '20px'
    const marginLeft = '1px'
    const { container } = render(
        <Header size={size} align={align}>{text}</Header>
    )

    expect(container).toHaveTextContent(text)
    expect(container.firstChild).toHaveStyle(`fontSize: ${size}px;`)
    expect(container.firstChild).toHaveStyle(`textAlign: ${align};`)
    expect(container.firstChild).toHaveStyle(`marginTop: ${marginTop};`)
    expect(container.firstChild).toHaveStyle(`marginLeft: ${marginLeft};`)

});

it('header renders with correct content', async () => {
  const text = 'hi'
  const size = '48'
  const align = 'left'

  const { container } = render(
      <Header size={size} align={align}>{text}</Header>
  )

  expect(container).toHaveTextContent(text)

});




  
  