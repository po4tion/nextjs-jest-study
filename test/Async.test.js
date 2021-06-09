import { getPage } from 'next-page-tester';
import { screen } from '@testing-library/react';
import { render } from 'react-dom';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    // mock
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    });

    const { render } = await getPage({
      route: '/Async',
    });

    render();

    const listEl = await screen.findAllByRole('listitem');

    expect(listEl).not.toHaveLength(0);
  });
});
