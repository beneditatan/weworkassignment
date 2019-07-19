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

it('header renders props correctly', async () => {
    const text = 'hi'
    const size = '48'
    const align = 'left'
    const { container } = render(
        <Header size={size} align={align}>{text}</Header>
    )

    expect(container).toHaveTextContent(text)
    expect(container.firstChild).toHaveStyle(`font-size: ${size}px;`)
    expect(container.firstChild).toHaveStyle(`text-align: ${align};`)

});




  
  