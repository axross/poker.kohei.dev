import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import {
  VictoryChart,
  VictoryChartProps,
  VictoryTheme,
  VictoryThemeDefinition,
} from "victory";
export { VictoryArea as ChartArea, VictoryAxis as ChartAxis } from "victory";

export const theme: VictoryThemeDefinition = {
  ...VictoryTheme.grayscale,
  area: {
    ...VictoryTheme.grayscale.area,
    animate: true,
    style: {
      ...VictoryTheme.grayscale.area.style,
      data: {
        ...VictoryTheme.grayscale.area.style.data,
        fill: "currentColor",
        opacity: 0.75,
      },
      labels: {
        ...(Array.isArray(VictoryTheme.grayscale.area.style.labels)
          ? VictoryTheme.grayscale.area.style.labels[0] ?? {}
          : VictoryTheme.grayscale.area.style.labels),
        fontSize: 14,
        fill: "currentColor",
      },
    },
  },
  axis: {
    ...VictoryTheme.grayscale.axis,
    style: {
      ...VictoryTheme.grayscale.axis.style,
      axis: {
        ...VictoryTheme.grayscale.axis.style.axis,
        stroke: "currentColor",
      },
      axisLabel: {
        ...(Array.isArray(VictoryTheme.grayscale.axis.style.axisLabel)
          ? VictoryTheme.grayscale.axis.style.axisLabel[0] ?? {}
          : VictoryTheme.grayscale.axis.style.axisLabel),
        fontSize: 14,
        fill: "currentColor",
      },
      ticks: {
        ...VictoryTheme.grayscale.axis.style.ticks,
        stroke: "currentColor",
      },
      tickLabels: {
        ...(Array.isArray(VictoryTheme.grayscale.axis.style.tickLabels)
          ? VictoryTheme.grayscale.axis.style.tickLabels[0] ?? {}
          : VictoryTheme.grayscale.axis.style.tickLabels),
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
      className={twMerge("w-full max-w-md mt-4 mx-auto", className)}
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
