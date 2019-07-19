import React from 'react';
import ReactDOM from 'react-dom';
import ClanWrapper from '../components/clan-wrapper';
import CLANS from '../constants/clans'

import {
    render,
    fireEvent,
    cleanup,
    waitForElement,
  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('ClanWrapper renders without crashing', () => {
    const clan = CLANS.REACT;
  const div = document.createElement('div');
  ReactDOM.render(<ClanWrapper clan={clan}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ClanWrapper rendered with the correct styling', () => {
    const clan = CLANS.REACT;
    const align = 'left';
    const { container } = render(<ClanWrapper clan={clan}/>);

    expect(container.firstChild).toHaveStyle(`text-align: ${align};`);
});

it('ClanWrapper contains ClanCard', () => {
    const clan = CLANS.REACT;
    const { container } = render(<ClanWrapper clan={clan}/>);
    const clanCardNode = container.querySelector('ClanCard');
    
    expect(clanCardNode).toBeDefined();
});
