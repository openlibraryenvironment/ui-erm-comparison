import { mockReactQuery as reactQueryMocks, renderWithIntl } from '@folio/stripes-erm-testing';
import { MemoryRouter } from 'react-router-dom';
import translationsProperties from '../../../test/jest/helpers/translationsProperties';
import ComparisonReportViewRoute from './ComparisonReportViewRoute';

const historyPushMock = jest.fn();
const historyReplaceMock = jest.fn();

const data = {
  history: {
    push: historyPushMock,
    replace: historyReplaceMock
  },
  location: {
    search: '',
    pathname: '/comparisons-erm/85f1c1f4-d619-4c07-a2f8-8163c3579bf9/report'
  },
  match: {
    params: {
      id: '85f1c1f4-d619-4c07-a2f8-8163c3579bf9'
    },
  }
};

/* EXAMPLE Mocking using an import from stripes-erm-testing
 * For whatever reason,m we can't directly spread the import into the mock.
 * Instead we import, set to some variable, and then use that in the mock.
 *
 * In this component we expect useQuery to return an object in one instance and an array in the other
 * Our mock only returns an object, so re-mock that here
 */
const mockReactQuery = reactQueryMocks;
jest.unmock('react-query');
jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  ...mockReactQuery,
  useQuery: jest.fn(() => ({ data: null, refetch: jest.fn(), isLoading: false }))
}));

describe('ComparisonReportViewRoute', () => {
  describe('renders the ComparisonReportViewRoute', () => {
    let renderComponent;
    beforeEach(() => {
      renderComponent = renderWithIntl(
        <MemoryRouter>
          <ComparisonReportViewRoute {...data} />
        </MemoryRouter>,
        translationsProperties
      );
    });

    test('displays no items in the list message', () => {
      const { getByText } = renderComponent;
      expect(getByText('The list contains no items')).toBeInTheDocument();
    });

    test('renders the comparisonReport view by id', () => {
      const { getByTestId } = renderComponent;
      expect(getByTestId('comparisonReport')).toBeInTheDocument();
    });
  });
});
