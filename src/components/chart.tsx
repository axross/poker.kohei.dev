import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import {
  VictoryChart,
  VictoryChartProps,
  VictoryTheme,
  VictoryThemeDefinition,
} from "victory";

export {
  VictoryArea as ChartArea,
  VictoryAxis as ChartAxis,
  VictoryLine as ChartLine,
} from "victory";

export const theme: VictoryThemeDefinition = {
  ...VictoryTheme.grayscale,
  area: {
    ...VictoryTheme.grayscale.area,
    animate: true,
    style: {
      ...VictoryTheme.grayscale.area?.style,
      data: {
        ...VictoryTheme.grayscale.area?.style?.data,
        fill: "var(--chart-foreground-color)",
        opacity: 0.75,
      },
      labels: {
        ...(Array.isArray(VictoryTheme.grayscale.area?.style?.labels)
          ? VictoryTheme.grayscale.area?.style?.labels[0] ?? {}
          : VictoryTheme.grayscale.area?.style?.labels),
        fontSize: 14,
        fill: "currentColor",
      },
    },
  },
  axis: {
    ...VictoryTheme.grayscale.axis,
    style: {
      ...VictoryTheme.grayscale.axis?.style,
      axis: {
        ...VictoryTheme.grayscale.axis?.style?.axis,
        stroke: "var(--chart-axis-color)",
      },
      axisLabel: {
        ...(Array.isArray(VictoryTheme.grayscale.axis?.style?.axisLabel)
          ? VictoryTheme.grayscale.axis?.style?.axisLabel[0] ?? {}
          : VictoryTheme.grayscale.axis?.style?.axisLabel),
        fontSize: 14,
        fill: "currentColor",
      },
      ticks: {
        ...VictoryTheme.grayscale.axis?.style?.ticks,
        stroke: "var(--chart-axis-color)",
      },
      tickLabels: {
        ...(Array.isArray(VictoryTheme.grayscale.axis?.style?.tickLabels)
          ? VictoryTheme.grayscale.axis?.style?.tickLabels[0] ?? {}
          : VictoryTheme.grayscale.axis?.style?.tickLabels),
        fontSize: 14,
        fill: "currentColor",
      },
    },
  },
  line: {
    ...VictoryTheme.grayscale.line,
    animate: true,
    style: {
      ...VictoryTheme.grayscale.line?.style,
      data: {
        ...VictoryTheme.grayscale.line?.style?.data,
        stroke: "var(--chart-foreground-color)",
        strokeWidth: "0.1875em",
      },
      labels: {
        ...(Array.isArray(VictoryTheme.grayscale.line?.style?.labels)
          ? VictoryTheme.grayscale.line?.style?.labels[0] ?? {}
          : VictoryTheme.grayscale.line?.style?.labels),
        fontSize: 14,
        fill: "currentColor",
      },
    },
  },
};

export type ChartContainerProps = HTMLAttributes<HTMLDivElement>;

export const ChartContainer: FC<ChartContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "mx-auto mt-4 w-full max-w-md [--chart-axis-color:theme(colors.gray.500/50)] [--chart-foreground-color:theme(colors.pink.500)]",
        className
      )}
      {...props}
    />
  );
};

export type ChartProps = VictoryChartProps;

export const Chart: FC<ChartProps> = ({ children, ...props }) => {
  return (
    <VictoryChart theme={theme} {...props}>
      {children}
    </VictoryChart>
  );
};
