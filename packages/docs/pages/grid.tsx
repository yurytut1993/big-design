import { Box, Grid, GridItem, H1, Panel, Text } from '@bigcommerce/big-design';
import React from 'react';

import { Code, CodePreview, PageNavigation } from '../components';
import {
  BoxPropTable,
  DisplayPropTable,
  GridItemPropTable,
  GridPropTable,
  MarginPropTable,
  PaddingPropTable,
} from '../PropTables';

const ExampleBox: React.FC = ({ children }) => (
  <Box backgroundColor="secondary20" border="box" padding="small" style={{ height: '100%' }}>
    {children}
  </Box>
);

const GridPage = () => {
  const items = [
    {
      id: 'examples',
      title: 'Examples',
      render: () => (
        <>
          <Panel>
            <Text>The Grid component is useful for creating intrinsically responsive layouts.</Text>
            <CodePreview scope={{ ExampleBox }}>
              {/* jsx-to-string:start */}
              <Grid>
                <GridItem>
                  <ExampleBox>Item 1</ExampleBox>
                </GridItem>
                <GridItem>
                  <ExampleBox>Item 2</ExampleBox>
                </GridItem>
                <GridItem>
                  <ExampleBox>Item 3</ExampleBox>
                </GridItem>
                <GridItem>
                  <ExampleBox>Item 4</ExampleBox>
                </GridItem>
              </Grid>
              {/* jsx-to-string:end */}
            </CodePreview>
          </Panel>
          <Panel header="Custom layout">
            <Text>
              Grid allows you to create custom layouts using combinations of <Code>gridTemplate</Code> and{' '}
              <Code>gridArea</Code> props.
            </Text>
            <CodePreview scope={{ ExampleBox }}>
              {/* jsx-to-string:start */}
              {function Example() {
                const template = `
              "head head" 80px
              "nav  main" 200px
              "foot  foot" 50px
              / 1fr 5fr;
            `;

                return (
                  <Grid gridTemplate={template}>
                    <GridItem gridArea="head">
                      <ExampleBox>Header</ExampleBox>
                    </GridItem>
                    <GridItem gridArea="nav">
                      <ExampleBox>Sidebar</ExampleBox>
                    </GridItem>
                    <GridItem gridArea="main">
                      <ExampleBox>Content</ExampleBox>
                    </GridItem>
                    <GridItem gridArea="foot">
                      <ExampleBox>Footer</ExampleBox>
                    </GridItem>
                  </Grid>
                );
              }}
              {/* jsx-to-string:end */}
            </CodePreview>
          </Panel>
          <Panel header="Column layout">
            <Text>
              You can use the <Code>gridColumns</Code> prop to create columned layouts.
            </Text>

            <CodePreview scope={{ ExampleBox }}>
              {/* jsx-to-string:start */}
              <Grid gridColumns="repeat(3, 1fr)">
                <GridItem>
                  <ExampleBox>
                    Reprehenderit ullamco et elit eu duis non reprehenderit eiusmod pariatur ea deserunt irure.
                    Reprehenderit et incididunt sit aute sint proident eu eiusmod pariatur Lorem nulla labore irure
                    nisi. Adipisicing do duis occaecat ipsum dolor ea. Qui consectetur sint eu nulla duis et commodo
                    anim commodo. Ullamco consectetur elit ullamco aliquip do id consectetur anim laborum.
                  </ExampleBox>
                </GridItem>

                <GridItem>
                  <ExampleBox>
                    In sit dolore culpa reprehenderit tempor laborum. Sit anim voluptate pariatur irure amet mollit. Est
                    mollit ad pariatur esse eu reprehenderit ut veniam. Aliquip anim mollit aliquip quis officia minim
                    esse laboris proident fugiat cillum. Eiusmod culpa eu ea eiusmod nostrud.
                  </ExampleBox>
                </GridItem>

                <GridItem>
                  <ExampleBox>
                    Ipsum adipisicing pariatur magna quis incididunt amet pariatur. Aliqua voluptate consequat ut elit
                    ea dolore officia reprehenderit exercitation dolore eiusmod cupidatat quis. Ullamco ipsum do
                    deserunt sunt ad deserunt ut. Elit non velit dolore ad est eu.
                  </ExampleBox>
                </GridItem>
              </Grid>
              {/* jsx-to-string:end */}
            </CodePreview>
          </Panel>
        </>
      ),
    },
    {
      id: 'props',
      title: 'Props',
      render: () => (
        <>
          <GridPropTable
            inheritedProps={
              <>
                <BoxPropTable collapsible />
                <DisplayPropTable collapsible />
                <MarginPropTable collapsible />
                <PaddingPropTable collapsible />
              </>
            }
          />
          <GridItemPropTable
            inheritedProps={
              <>
                <BoxPropTable collapsible />
                <DisplayPropTable collapsible />
                <MarginPropTable collapsible />
                <PaddingPropTable collapsible />
              </>
            }
          />
        </>
      ),
    },
  ];

  return (
    <>
      <H1>Grid</H1>

      <PageNavigation items={items} />
    </>
  );
};

export default GridPage;
