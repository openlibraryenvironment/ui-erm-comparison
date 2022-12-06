
import { renderWithIntl } from '@folio/stripes-erm-testing';
import { MultiColumnList } from '@folio/stripes-testing';
// import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import translationsProperties from '../../../../test/jest/helpers/translationsProperties';
import ComparisonReportList from './ComparisonReportList';
import sourceData from './testResources';

describe('ComparisonReportList', () => {
  beforeEach(() => {
    renderWithIntl(
      <MemoryRouter>
        <ComparisonReportList
          sourceData={sourceData}
        />
      </MemoryRouter>,
      translationsProperties
    );
    // screen.debug();
  });

  test('renders the comparison report MCL', async () => {
    await MultiColumnList('comparison-report-mcl').exists();
  });

  test('renders expected column count', async () => {
    await MultiColumnList({ columnCount: 6 }).exists();
  });

  test('renders expected row count', async () => {
    await MultiColumnList({ rowCount: 1 }).exists();
  });
});

