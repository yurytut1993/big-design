import { H1, InlineMessage, Panel, Text } from '@bigcommerce/big-design';
import React from 'react';

import { Code, CodePreview, ContentRoutingTabs, List } from '../components';
import { InlineMessagePropTable } from '../PropTables';
import { MessagingItemPropTable, MessagingLinkItemPropTable } from '../PropTables/shared';

const InlineMessagePage = () => {
  return (
    <>
      <H1>InlineMessage</H1>

      <Panel header="Overview" headerId="overview">
        <Text>
          Inline messages inform merchants about important component/section level changes or persistent conditions that
          need their attention.
        </Text>
        <Text bold>When to use it:</Text>
        <List>
          <List.Item>
            To alert the merchant of a change or condition related to an individual component or section.
          </List.Item>
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
                    An inline message, mostly used for displaying alerts within Modals. Is a condensed version of the{' '}
                    <Code primary>Message</Code> component.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <InlineMessage
                      header="Header"
                      messages={[
                        {
                          text: 'Required description copy.',
                          link: {
                            text: 'Optional Link',
                            href: '#',
                          },
                        },
                      ]}
                      onClose={() => null}
                    />
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </>
              ),
            },
            {
              id: 'types',
              title: 'Types',
              render: () => (
                <>
                  <Text>
                    There are four types of <Code primary>InlineMessages</Code> based on the level of message you want
                    to display.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <>
                      <InlineMessage
                        type="error"
                        messages={[{ text: 'Required description copy.' }]}
                        marginVertical="medium"
                      />
                      <InlineMessage
                        type="success"
                        messages={[{ text: 'Required description copy.' }]}
                        marginVertical="medium"
                      />
                      <InlineMessage
                        type="warning"
                        messages={[{ text: 'Required description copy.' }]}
                        marginVertical="medium"
                      />
                      <InlineMessage
                        type="info"
                        messages={[{ text: 'Required description copy.' }]}
                        marginVertical="medium"
                      />
                    </>
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </>
              ),
            },
            {
              id: 'header',
              title: 'Header',
              render: () => (
                <>
                  <Text>
                    <Code primary>InlineMessage</Code>'s allow you to pass an optional <Code primary>header</Code> prop.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <>
                      <InlineMessage
                        type="success"
                        messages={[{ text: 'Required description copy.' }]}
                        marginVertical="medium"
                      />
                      <InlineMessage
                        header="Header"
                        type="success"
                        messages={[{ text: 'Required description copy.' }]}
                        marginVertical="medium"
                      />
                    </>
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </>
              ),
            },
            {
              id: 'onclose',
              title: 'onClose',
              render: () => (
                <>
                  <Text>Toggles the visibility of the close button, and provides an on click callback.</Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <>
                      <InlineMessage
                        type="info"
                        messages={[{ text: 'Required description copy.' }]}
                        marginVertical="medium"
                      />
                      <InlineMessage
                        onClose={() => null}
                        type="info"
                        messages={[{ text: 'Required description copy.' }]}
                        marginVertical="medium"
                      />
                    </>
                    {/* jsx-to-string:end */}
                  </CodePreview>
                </>
              ),
            },
            {
              id: 'actions',
              title: 'Actions',
              render: () => (
                <>
                  <Text>
                    <Code primary>InlineMessage</Code>'s allow you to pass an optional <Code primary>actions</Code>{' '}
                    prop.
                  </Text>

                  <CodePreview>
                    {/* jsx-to-string:start */}
                    <>
                      <InlineMessage
                        header="header"
                        type="info"
                        messages={[{ text: 'Required description copy.' }]}
                        marginVertical="medium"
                      />
                      <InlineMessage
                        actions={[
                          { text: 'First Action', onClick: () => null },
                          { text: 'Second Action', variant: 'subtle', onClick: () => null },
                        ]}
                        header="header"
                        type="info"
                        messages={[{ text: 'Required description copy.' }]}
                        marginVertical="medium"
                      />
                    </>
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
              id: 'inline-message',
              title: 'InlineMessage',
              render: () => <InlineMessagePropTable renderPanel={false} />,
            },
            {
              id: 'message-item',
              title: 'MessageItem',
              render: () => <MessagingItemPropTable id="message-item-prop-table" renderPanel={false} />,
            },
            {
              id: 'message-link-item',
              title: 'MessageLinkItem',
              render: () => <MessagingLinkItemPropTable id="message-link-item-prop-table" renderPanel={false} />,
            },
          ]}
        />
      </Panel>
    </>
  );
};

export default InlineMessagePage;
