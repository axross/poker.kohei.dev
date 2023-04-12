import { SVGProps, forwardRef } from "react";

export const OnlineClassMathIcon = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2500 2500"
      ref={ref}
      {...props}
    >
      <path
        d="M 183.500 0.642 C 152.812 4.140, 132.316 9.834, 109.765 21.128 C 89.846 31.103, 76.924 40.232, 61.129 55.485 C 29.276 86.245, 11.168 120.881, 2.300 168.014 C 0.598 177.057, 0.502 212.393, 0.233 924.500 C -0.019 1592.314, 0.114 1672.940, 1.493 1685.087 C 8.511 1746.903, 42.624 1800.637, 95.187 1832.669 C 120.661 1848.193, 151.257 1858.045, 183 1860.943 C 190.743 1861.650, 298.341 1861.994, 512.329 1861.997 L 830.159 1862 829.591 1864.750 C 829.278 1866.263, 816.846 1937.250, 801.963 2022.500 C 787.081 2107.750, 774.670 2178.287, 774.385 2179.250 C 773.903 2180.873, 771.347 2181, 739.143 2181 C 711.173 2181, 703.276 2181.298, 698.535 2182.533 C 682.115 2186.810, 667.131 2201.290, 661.907 2217.928 C 659.072 2226.958, 659.072 2241.042, 661.907 2250.072 C 667.162 2266.811, 682.017 2281.156, 698.575 2285.482 C 703.801 2286.848, 722.726 2287.029, 859.030 2287.018 C 1028.042 2287.004, 1019.007 2287.309, 1030.425 2281.234 C 1038.619 2276.875, 1049.388 2265.496, 1053.485 2256.870 C 1060.273 2242.575, 1060.220 2225.043, 1053.346 2211 C 1049.050 2202.224, 1038.487 2191.055, 1030.425 2186.766 C 1019.613 2181.013, 1019.425 2181, 948.290 2181 C 912.380 2181, 882.988 2180.662, 882.973 2180.250 C 882.959 2179.838, 895.433 2108.063, 910.694 2020.750 L 938.440 1862 987.470 1861.983 C 1042.316 1861.963, 1045.061 1861.705, 1056.999 1855.431 C 1064.995 1851.229, 1074.907 1841.399, 1079.217 1833.396 C 1086.972 1818.995, 1086.979 1798.132, 1079.234 1783.575 C 1075.280 1776.142, 1063.747 1764.908, 1056.122 1761.060 C 1043.260 1754.570, 1077.326 1755.036, 614.381 1755.017 C 247.810 1755.002, 191.159 1754.807, 183.881 1753.532 C 147.403 1747.144, 121.499 1724.244, 110.316 1688.500 L 107.500 1679.500 107.500 931 L 107.500 182.500 110.273 173.500 C 115.499 156.540, 121.934 145.621, 133.748 133.670 C 145.036 122.251, 156.170 115.707, 173.500 110.305 L 182.500 107.500 1148.500 107.500 C 2083.136 107.500, 2114.711 107.560, 2121 109.338 C 2138.825 114.379, 2151.312 121.179, 2162.339 131.850 C 2177.378 146.404, 2185.982 162.548, 2189.535 182.881 C 2190.809 190.169, 2191.004 261.358, 2191.031 728.881 C 2191.050 1065.697, 2191.420 1269.301, 2192.020 1274 C 2193.425 1284.990, 2198.468 1294.662, 2207.412 1303.517 C 2215.261 1311.287, 2221.681 1315.161, 2230.535 1317.467 C 2238.069 1319.429, 2250.928 1319.430, 2258.458 1317.469 C 2276.002 1312.899, 2291.650 1297.385, 2296.167 1280.081 C 2297.780 1273.901, 2297.888 1240.590, 2297.942 732.924 C 2297.982 358.290, 2297.674 188.994, 2296.937 181.424 C 2292.422 135.027, 2273.984 94.048, 2243.112 61.794 C 2216.646 34.142, 2185.169 15.745, 2148.397 6.437 C 2120.652 -0.586, 2211.871 -0.014, 1147.500 0.151 C 618.950 0.233, 185.150 0.454, 183.500 0.642 M 1558.597 269.139 C 1518.726 274.255, 1487.742 302.213, 1478.402 341.500 C 1476.044 351.420, 1476.036 371.163, 1478.386 381.391 C 1482.306 398.453, 1490.177 413.064, 1502.182 425.570 C 1518.177 442.230, 1536.371 451.234, 1559.778 454.071 C 1577.027 456.161, 1593.001 453.137, 1610.500 444.468 C 1634.295 432.680, 1650.722 413.224, 1658.643 387.451 C 1661.186 379.179, 1661.394 377.211, 1661.394 361.500 C 1661.394 345.773, 1661.187 343.826, 1658.631 335.500 C 1647.717 299.948, 1618.264 274.685, 1581.664 269.482 C 1570.418 267.883, 1568.596 267.856, 1558.597 269.139 M 1293.772 569.341 C 1277.559 574.875, 1263.704 589.522, 1259.533 605.535 C 1257.638 612.811, 1257.567 626.784, 1259.390 633.632 C 1262.862 646.672, 1273.791 660.478, 1285.582 666.719 C 1298.395 673.501, 1275.812 673.006, 1569.460 672.942 C 1817.611 672.889, 1835.943 672.769, 1842.081 671.167 C 1860.674 666.313, 1876.733 648.367, 1880.043 628.745 C 1884.053 604.971, 1872.382 582.728, 1850.107 571.690 L 1841.651 567.500 1571.075 567.272 L 1300.500 567.044 1293.772 569.341 M 1550.642 796.939 C 1522.312 803.127, 1499.813 820.262, 1486.798 845.564 C 1469.934 878.348, 1473.675 916.908, 1496.522 945.801 C 1507.347 959.491, 1522.759 970.362, 1539.338 976.001 C 1585.827 991.813, 1636.646 968.559, 1655.305 922.937 C 1660.679 909.798, 1661.500 905.169, 1661.500 888 C 1661.500 870.700, 1660.651 865.959, 1655.235 853 C 1643.805 825.654, 1620.602 805.289, 1592.500 797.939 C 1580.728 794.861, 1562.188 794.418, 1550.642 796.939 M 700.387 943.992 C 683.150 946.540, 667.993 957.586, 660.583 973 C 658.389 977.564, 642.428 1035.871, 606.993 1168.767 C 570.145 1306.966, 556.185 1357.901, 555.254 1357.544 C 554.554 1357.275, 516.972 1332.911, 471.740 1303.401 C 426.508 1273.892, 387.025 1248.450, 384 1246.864 C 378.121 1243.782, 367.047 1241.035, 360.500 1241.035 C 347.195 1241.035, 332.781 1247.142, 323.041 1256.907 C 301.923 1278.078, 301.994 1312.109, 323.199 1332.670 C 327.625 1336.961, 556.360 1486.633, 565.733 1491.371 C 585.139 1501.181, 610.034 1497.479, 625.454 1482.493 C 631.733 1476.390, 637.304 1467.417, 639.837 1459.328 C 641.012 1455.572, 665.400 1364.525, 694.031 1257 C 722.662 1149.475, 746.802 1058.912, 747.676 1055.750 L 749.264 1050 954.882 1049.983 C 1180.895 1049.964, 1168.481 1050.300, 1179.872 1043.882 C 1188.132 1039.228, 1193.634 1034.385, 1198.416 1027.560 C 1206.651 1015.806, 1209.270 1005.117, 1207.840 989.101 C 1206.209 970.841, 1191.125 952.623, 1172 945.814 L 1165.500 943.500 935.500 943.368 C 809 943.296, 703.199 943.577, 700.387 943.992 M 1439.500 1500.668 C 1412.043 1504.041, 1391.852 1511.414, 1372.725 1525.053 C 1353.047 1539.084, 1338.733 1559.478, 1332.756 1582 L 1330.500 1590.500 1330.500 1915 L 1330.500 2239.500 1332.739 2247.896 C 1342.207 2283.403, 1369.642 2311.121, 1407.636 2323.568 C 1421.369 2328.066, 1434.782 2329.686, 1469 2330.981 C 1628.470 2337.012, 1754.330 2369.507, 1825.552 2423.039 C 1837.111 2431.727, 1850.963 2445.173, 1857.446 2454 C 1860.071 2457.575, 1864.247 2464.530, 1866.724 2469.456 C 1876.500 2488.899, 1894.114 2500.043, 1914.960 2499.976 C 1924.708 2499.944, 1929.827 2498.723, 1938.858 2494.277 C 1949.423 2489.076, 1957.480 2480.814, 1963.084 2469.435 C 1987.491 2419.875, 2067.834 2376.125, 2177.979 2352.415 C 2235.320 2340.072, 2293.003 2333.612, 2378 2330.013 C 2403.847 2328.919, 2415.336 2326.807, 2431.381 2320.200 C 2446.610 2313.930, 2456.949 2306.950, 2469.453 2294.500 C 2481.883 2282.123, 2488.133 2272.711, 2493.616 2258.115 C 2500.469 2239.869, 2500 2265.069, 2500 1915 C 2500 1571.324, 2500.308 1591.010, 2494.670 1574.481 C 2482.090 1537.597, 2448.909 1511.685, 2402.248 1502.305 C 2382.558 1498.347, 2327.143 1501.173, 2259.820 1509.569 C 2109.383 1528.330, 1997.322 1568.745, 1921.995 1631.406 L 1914.895 1637.312 1912.521 1635.406 C 1911.215 1634.358, 1905.338 1629.589, 1899.461 1624.808 C 1837.726 1574.591, 1738.407 1536.334, 1618.500 1516.584 C 1554.023 1505.963, 1462.581 1497.833, 1439.500 1500.668 M 1441.500 1608.715 L 1436.500 1610.500 1436.248 1915.223 L 1435.997 2219.947 1438.867 2221.431 C 1440.993 2222.531, 1448.316 2223.189, 1467.118 2223.971 C 1481.078 2224.551, 1499.475 2225.473, 1508 2226.019 C 1652.145 2235.257, 1769.205 2264.675, 1850.593 2312.117 C 1856.144 2315.353, 1860.981 2318, 1861.343 2318 C 1861.704 2318, 1862 2187.429, 1862 2027.842 L 1862 1737.685 1857.941 1732.424 C 1848.669 1720.405, 1828.633 1703.497, 1809.885 1691.869 C 1747.679 1653.288, 1657.108 1626.979, 1540 1613.475 C 1514.733 1610.562, 1482.543 1607.999, 1464.500 1607.464 C 1448.865 1607.001, 1445.843 1607.165, 1441.500 1608.715 M 2354.500 1607.688 C 2226.277 1616.084, 2118.615 1640.318, 2046.439 1677.030 C 2013.851 1693.605, 1988.903 1711.999, 1972.831 1731.302 L 1968 1737.104 1968 2027.552 C 1968 2187.298, 1968.250 2318, 1968.556 2318 C 1968.861 2318, 1973.411 2315.470, 1978.666 2312.377 C 1983.920 2309.284, 1995.324 2303.222, 2004.007 2298.905 C 2092.769 2254.774, 2210.618 2230.082, 2361.490 2224.003 C 2375.235 2223.450, 2387.948 2222.512, 2389.740 2221.921 L 2393 2220.845 2393 1915.461 L 2393 1610.077 2387.818 1608.539 C 2382.908 1607.080, 2369.146 1606.729, 2354.500 1607.688"
        stroke="none"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
});
OnlineClassMathIcon.displayName = "OnlineClassMathIcon";