import type { Meta, StoryObj } from "@storybook/react";
import { Code, CodeGroup, Pre } from "components/code";

const meta: Meta<typeof Code> = {
  title: "components/Code",
  component: Code,
  tags: ["autodocs"],
  args: {
    children: `curl -G https://api.protocol.chat/v1/attachments \\
-H "Authorization: Bearer {token}" \\
-d conversation_id="xgQQXg3hrtjh7AvZ" \\
-d limit=10`,
  },
  render: ({ children, ...props }) => (
    <Pre {...props}>
      <Code>{children}</Code>
    </Pre>
  ),
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Single: Story = {};

export const Grouped: Story = {
  render: () => (
    <CodeGroup title="Request" tag="GET" label="/v1/attachments">
      <Pre title="cURL">
        <Code>{`curl -G https://api.protocol.chat/v1/attachments \\
-H "Authorization: Bearer {token}" \\
-d conversation_id="xgQQXg3hrtjh7AvZ" \\
-d limit=10`}</Code>
      </Pre>

      <Pre language="js">
        <Code>{`import ApiClient from '@example/protocol-api'

const client = new ApiClient(token)

await client.attachments.list()`}</Code>
      </Pre>

      <Pre title="python">
        <Code>{`from protocol_api import ApiClient

client = ApiClient(token)

client.attachments.list()`}</Code>
      </Pre>

      <Pre title="php">
        <Code>{`$client = new \Protocol\ApiClient($token);

$client->attachments->list();`}</Code>
      </Pre>
    </CodeGroup>
  ),
};
