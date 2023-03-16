import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import {
  VictoryArea,
  VictoryAreaProps,
  VictoryAxis,
  VictoryAxisProps,
  VictoryChart,
  VictoryTheme,
  VictoryThemeDefinition,
} from "victory";

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

export interface ChartProps extends HTMLAttributes<HTMLDivElement> {
  dependentAxisMinDomain?: VictoryAxisProps["minDomain"];
  dependentAxisMaxDomain?: VictoryAxisProps["maxDomain"];
  dependentAxisTickValues?: VictoryAxisProps["tickValues"];
  dependentAxisTickFormat?: VictoryAxisProps["tickFormat"];
  dependentAxisLabel?: VictoryAxisProps["label"];
  crossAxisMinDomain?: VictoryAxisProps["minDomain"];
  crossAxisMaxDomain?: VictoryAxisProps["maxDomain"];
  crossAxisTickValues?: VictoryAxisProps["tickValues"];
  crossAxisTickFormat?: VictoryAxisProps["tickFormat"];
  crossAxisLabel?: VictoryAxisProps["label"];
}

export const Chart: FC<ChartProps> = ({
  dependentAxisMinDomain = 0,
  dependentAxisMaxDomain = 1,
  dependentAxisTickValues = [dependentAxisMinDomain, dependentAxisMaxDomain],
  dependentAxisTickFormat,
  dependentAxisLabel,
  crossAxisMinDomain = 0,
  crossAxisMaxDomain = 1,
  crossAxisTickValues = [crossAxisMinDomain, crossAxisMaxDomain],
  crossAxisTickFormat,
  crossAxisLabel,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={twMerge("w-full max-w-md mt-4 mx-auto", className)}
      {...props}
    >
      <VictoryChart theme={theme}>
        {children}

        <VictoryAxis
          dependentAxis
          minDomain={dependentAxisMinDomain}
          maxDomain={dependentAxisMaxDomain}
          tickValues={dependentAxisTickValues}
          tickFormat={dependentAxisTickFormat}
          label={dependentAxisLabel}
        />

        <VictoryAxis
          crossAxis
          minDomain={crossAxisMinDomain}
          maxDomain={crossAxisMaxDomain}
          tickValues={crossAxisTickValues}
          tickFormat={crossAxisTickFormat}
          label={crossAxisLabel}
        />
      </VictoryChart>
    </div>
  );
};

export interface ChartAreaProps extends VictoryAreaProps {
  data: { x: number; y: number }[];
}

export const ChartArea: FC<ChartAreaProps> = (props) => {
  return (
    <VictoryArea data={[]} x="x" y="y" interpolation="natural" {...props} />
  );
};
