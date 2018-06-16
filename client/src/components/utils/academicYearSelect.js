import React from 'react';
import { Select } from 'semantic-ui-react';

import { schoolYears } from '../../constants/schoolYears';

const AcademicYearSelect = ({ onSchoolYearChange }) => (
  <Select placeholder='Select School Year' options={schoolYears} onChange={onSchoolYearChange} />
);

export default AcademicYearSelect;