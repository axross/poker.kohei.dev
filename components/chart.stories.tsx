import type { Meta, StoryObj } from "@storybook/react";

import { Chart, ChartArea, ChartAxis, ChartContainer } from "./chart";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Chart> = {
  title: "Components/Chart",
  component: Chart,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Chart>;

/**
 * A basic example of `<Chart>` usage.
 */
export const Area: Story = {
  render: () => (
    <ChartContainer>
      <Chart>
        <ChartAxis
          dependentAxis
          minDomain={0}
          maxDomain={1}
          tickValues={[0, 1]}
          tickFormat={(y) => (y === 0 ? "0%" : "100%")}
          label="参加割合"
        />

        <ChartAxis
          crossAxis
          minDomain={0}
          maxDomain={1}
          tickValues={[0, 1]}
          tickFormat={(y) => (y === 0 ? "最低EQ" : "最高EQ")}
          label="レンジ構成ハンドのEQ"
        />

        <ChartArea
          data={[
            { x: 0.15, y: 0 },
            { x: 0.2, y: 0.45 },
            { x: 0.4, y: 0 },
            { x: 0.7, y: 0 },
            { x: 0.9, y: 0.9 },
            { x: 1, y: 1 },
          ]}
          interpolation="natural"
        />
      </Chart>
    </ChartContainer>
  ),
};

/**
 * `<Chart>` usage example that compares two different area of data.
 */
export const AreaComparison: Story = {
  render: () => (
    <ChartContainer>
      <Chart>
        <ChartAxis
          dependentAxis
          minDomain={0}
          maxDomain={1}
          tickValues={[0, 1]}
          tickFormat={(y) => (y === 0 ? "0%" : "100%")}
          label="参加割合"
        />

        <ChartAxis
          crossAxis
          minDomain={0}
          maxDomain={1}
          tickValues={[0, 1]}
          tickFormat={(y) => (y === 0 ? "最低EQ" : "最高EQ")}
          label="レンジ構成ハンドのEQ"
        />

        <ChartArea
          data={[
            { x: 0, y: 0 },
            { x: 0.02, y: 0 },
            { x: 0.04, y: 0 },
            { x: 0.06, y: 0 },
            { x: 0.08, y: 0 },
            { x: 0.1, y: 0 },
            { x: 0.12, y: 0 },
            { x: 0.14, y: 0.15384615384615385 },
            { x: 0.16, y: 0.07692307692307693 },
            { x: 0.18, y: 0.07692307692307693 },
            { x: 0.2, y: 0 },
            { x: 0.22, y: 0.15384615384615385 },
            { x: 0.24, y: 0.15384615384615385 },
            { x: 0.26, y: 0 },
            { x: 0.28, y: 0.15384615384615385 },
            { x: 0.3, y: 0.15384615384615385 },
            { x: 0.32, y: 0 },
            { x: 0.34, y: 0 },
            { x: 0.36, y: 0.15384615384615385 },
            { x: 0.38, y: 0 },
            { x: 0.4, y: 0.15384615384615385 },
            { x: 0.42, y: 0.15384615384615385 },
            { x: 0.44, y: 0 },
            { x: 0.46, y: 0.3076923076923077 },
            { x: 0.48, y: 0.23076923076923078 },
            { x: 0.5, y: 0 },
            { x: 0.52, y: 0 },
            { x: 0.54, y: 0.3076923076923077 },
            { x: 0.56, y: 0 },
            { x: 0.58, y: 0 },
            { x: 0.6, y: 0.15384615384615385 },
            { x: 0.62, y: 0.23076923076923078 },
            { x: 0.64, y: 0 },
            { x: 0.66, y: 0.3076923076923077 },
            { x: 0.68, y: 0 },
            { x: 0.7, y: 0.15384615384615385 },
            { x: 0.72, y: 0.23076923076923078 },
            { x: 0.74, y: 0.46153846153846145 },
            { x: 0.76, y: 0.15384615384615385 },
            { x: 0.78, y: 0.46153846153846145 },
            { x: 0.8, y: 0 },
            { x: 0.82, y: 0.15384615384615385 },
            { x: 0.84, y: 0.3076923076923077 },
            { x: 0.86, y: 0.5384615384615383 },
            { x: 0.88, y: 0.6153846153846152 },
            { x: 0.9, y: 0.46153846153846145 },
            { x: 0.92, y: 0.8461538461538458 },
            { x: 0.94, y: 1 },
            { x: 0.96, y: 1 },
            { x: 0.98, y: 0.6923076923076921 },
            { x: 1, y: 0.3076923076923077 },
          ]}
          interpolation="natural"
          style={{ data: { fill: "#10b981" } }}
        />

        <ChartArea
          data={[
            { x: 0, y: 0 },
            { x: 0.02, y: 0 },
            { x: 0.04, y: 0 },
            { x: 0.06, y: 0 },
            { x: 0.08, y: 0 },
            { x: 0.1, y: 0 },
            { x: 0.12, y: 0 },
            { x: 0.14, y: 0 },
            { x: 0.16, y: 0 },
            { x: 0.18, y: 0 },
            { x: 0.2, y: 0 },
            { x: 0.22, y: 0 },
            { x: 0.24, y: 0 },
            { x: 0.26, y: 0 },
            { x: 0.28, y: 0 },
            { x: 0.3, y: 0 },
            { x: 0.32, y: 0 },
            { x: 0.34, y: 0 },
            { x: 0.36, y: 0 },
            { x: 0.38, y: 0 },
            { x: 0.4, y: 0 },
            { x: 0.42, y: 0 },
            { x: 0.44, y: 0 },
            { x: 0.46, y: 0.15384615384615385 },
            { x: 0.48, y: 0.23076923076923078 },
            { x: 0.5, y: 0 },
            { x: 0.52, y: 0 },
            { x: 0.54, y: 0 },
            { x: 0.56, y: 0 },
            { x: 0.58, y: 0 },
            { x: 0.6, y: 0 },
            { x: 0.62, y: 0 },
            { x: 0.64, y: 0 },
            { x: 0.66, y: 0.15384615384615385 },
            { x: 0.68, y: 0 },
            { x: 0.7, y: 0 },
            { x: 0.72, y: 0.15384615384615385 },
            { x: 0.74, y: 0 },
            { x: 0.76, y: 0.15384615384615385 },
            { x: 0.78, y: 0.3846153846153846 },
            { x: 0.8, y: 0.3846153846153846 },
            { x: 0.82, y: 0.3076923076923077 },
            { x: 0.84, y: 0.3076923076923077 },
            { x: 0.86, y: 0.46153846153846145 },
            { x: 0.88, y: 0.6153846153846152 },
            { x: 0.9, y: 0.9230769230769227 },
            { x: 0.92, y: 0.3076923076923077 },
            { x: 0.94, y: 0.15384615384615385 },
            { x: 0.96, y: 0.9230769230769227 },
            { x: 0.98, y: 1 },
            { x: 1, y: 1 },
          ]}
          interpolation="natural"
          style={{ data: { fill: "#e11d48" } }}
        />
      </Chart>
    </ChartContainer>
  ),
};
