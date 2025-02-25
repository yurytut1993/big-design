import { Checkbox, Form, FormGroup, H1, Panel, Text } from '@bigcommerce/big-design';
import React, { useState } from 'react';

import { Code, CodePreview, ContentRoutingTabs, List } from '../components';
import { CheckboxDescriptionLinkPropTable, CheckboxDescriptionPropTable, CheckboxPropTable } from '../PropTables';

const CheckboxPage = () => {
  return (
    <>
      <H1>Checkbox</H1>

      <Panel header="Overview" headerId="overview">
        <Text>Checkboxes let users toggle settings on and off within a form.</Text>
        <Text bold>When to use it:</Text>
        <List>
          <List.Item>Use checkboxes when users can make toggle one or more items in a form.</List.Item>
        </List>
      </Panel>

      <Panel header="Implementation" headerId="implementation">
        <ContentRoutingTabs
          id="implementation"
          routes={[
            {
              id: 'basic',
              title: 'Basic',
              render: () => (
                <>
                  <Text>
                    Checkboxes are a stylized <Code>input[type="checkbox"]</Code> with controllable checked/unchecked
                    states.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    {function Example() {
                      const [checked, setChecked] = useState(false);
                      const handleChange = () => setChecked(!checked);

                      return (
                        <Form>
                          <FormGroup>
                            <Checkbox
                              label={checked ? 'Checked' : 'Unchecked'}
                              checked={checked}
                              onChange={handleChange}
                            />
                            <Checkbox label="Disabled" disabled={true} />
                          </FormGroup>
                        </Form>
                      );
                    }}
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </>
              ),
            },
            {
              id: 'indeterminate',
              title: 'Indeterminate',
              render: () => (
                <>
                  <Text>
                    Checkboxes support <Code primary>isIndeterminate</Code> passed as a prop to show a combined state of
                    partially selected checkboxes.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <Form>
                      <FormGroup>
                        <Checkbox label="Indeterminate" isIndeterminate />
                      </FormGroup>
                    </Form>
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </>
              ),
            },
            {
              id: 'description',
              title: 'Description',
              render: () => (
                <>
                  <Text>
                    Checkboxes support <Code primary>description</Code> passed as a prop, which contains a text and an
                    optional link.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    {function Example() {
                      const [checkedA, setChangeA] = useState(false);
                      const [checkedB, setChangeB] = useState(false);
                      const handleChangeA = () => setChangeA(!checkedA);
                      const handleChangeB = () => setChangeB(!checkedB);

                      return (
                        <Form>
                          <FormGroup>
                            <Checkbox
                              onChange={handleChangeA}
                              checked={checkedA}
                              label="Checkbox with description and link"
                              description={{
                                text: 'I am a CheckboxDescription.',
                                link: {
                                  text: 'Learn more',
                                  href: 'http://www.bigcommerce.com',
                                },
                              }}
                            />
                            <Checkbox
                              onChange={handleChangeB}
                              checked={checkedB}
                              label="Checkbox with description"
                              description="I am a string description."
                            />
                          </FormGroup>
                        </Form>
                      );
                    }}
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </>
              ),
            },
          ]}
        />
      </Panel>

      <Panel header="Props" headerId="props">
        <ContentRoutingTabs
          id="props"
          routes={[
            {
              id: 'checkbox',
              title: 'Checkbox',
              render: () => <CheckboxPropTable renderPanel={false} />,
            },
            {
              id: 'checkbox-description',
              title: 'CheckboxDescription',
              render: () => <CheckboxDescriptionPropTable id="checkbox-description-prop-table" renderPanel={false} />,
            },
            {
              id: 'checkbox-description-link',
              title: 'CheckboxDescriptionLink',
              render: () => (
                <CheckboxDescriptionLinkPropTable id="checkbox-description-link-prop-table" renderPanel={false} />
              ),
            },
          ]}
        />
      </Panel>
    </>
  );
};

export default CheckboxPage;
