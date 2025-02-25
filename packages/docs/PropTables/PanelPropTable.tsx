import React from 'react';

import { Prop, PropTable, PropTableWrapper } from '../components';

const panelProps: Prop[] = [
  {
    name: 'header',
    types: 'string',
    description: 'Defines the panel header text.',
  },
  {
    name: 'headerId',
    types: 'string',
    description: 'Gives the header a HTML id attribute. Useful if you need to use hash navigation to a panel header.',
  },
  {
    name: 'action',
    types: 'ButtonProps & { text: string }',
    description: 'Defines the panel action button.',
  },
];

export const PanelPropTable: React.FC<PropTableWrapper> = (props) => (
  <PropTable title="Panel" propList={panelProps} {...props} />
);
