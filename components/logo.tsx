import { FC, SVGProps } from "react";
import { twMerge } from "tailwind-merge";

export type LogoProps = SVGProps<SVGSVGElement>;

export const Logo: FC<LogoProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 84 20"
      className={twMerge(
        "box-content aspect-[84/20] h-11 px-2 py-3",
        className
      )}
      {...props}
    >
      <path
        fill="currentColor"
        d="M15 15V3.24h1.904v6.752c.117-.096.23-.192.336-.288.117-.096.23-.192.336-.288.117-.096.23-.192.336-.288.107-.107.213-.208.32-.304l.32-.32c.107-.107.208-.213.304-.32a9.41 9.41 0 0 1 .288-.336c.096-.117.187-.235.272-.352.085-.128.165-.256.24-.384a.9.9 0 0 0 .112-.432h2.24a.9.9 0 0 1-.112.432 2.948 2.948 0 0 1-.224.4 8.455 8.455 0 0 1-.272.384 4.164 4.164 0 0 1-.288.352l-.304.336a4.533 4.533 0 0 1-.32.32l-.32.32a9.817 9.817 0 0 1-.336.32 85.44 85.44 0 0 0-.336.304l-.352.288c.16.181.315.368.464.56.16.181.315.368.464.56.15.181.293.373.432.576.15.192.288.39.416.592.139.192.272.39.4.592.139.203.261.41.368.624.117.213.219.432.304.656.096.224.144.459.144.704h-1.904c0-.192-.037-.379-.112-.56a4.622 4.622 0 0 0-.224-.528 7.345 7.345 0 0 0-.272-.496c-.096-.16-.197-.32-.304-.48a7.364 7.364 0 0 0-.336-.464 7.364 7.364 0 0 0-.336-.464l-.352-.448c-.117-.15-.24-.299-.368-.448l-.512.384-.512.384V15H15ZM26.818 15.128c-.32 0-.64-.027-.96-.08a3.776 3.776 0 0 1-.896-.272 3.584 3.584 0 0 1-.8-.528 3.003 3.003 0 0 1-.576-.752 3.461 3.461 0 0 1-.32-.896c-.054-.32-.08-.64-.08-.96v-1.6c0-.32.026-.635.08-.944.064-.32.17-.619.32-.896.15-.288.341-.539.576-.752.245-.224.512-.4.8-.528a3.86 3.86 0 0 1 .896-.304c.32-.075.64-.112.96-.112.32 0 .634.037.944.112.32.064.624.165.912.304.288.128.55.304.784.528.245.213.442.464.592.752.15.277.25.576.304.896.064.31.096.624.096.944v1.6c0 .32-.032.64-.096.96-.054.31-.155.608-.304.896-.15.277-.347.528-.592.752-.235.213-.496.39-.784.528a3.753 3.753 0 0 1-.912.272 5.55 5.55 0 0 1-.944.08Zm0-1.616c.245 0 .485-.037.72-.112a1.31 1.31 0 0 0 .576-.4 1.68 1.68 0 0 0 .336-.64c.064-.235.096-.475.096-.72v-1.6c0-.245-.032-.485-.096-.72a1.54 1.54 0 0 0-.336-.64 1.295 1.295 0 0 0-.608-.384 2.049 2.049 0 0 0-1.424 0 1.443 1.443 0 0 0-.576.4c-.16.181-.272.39-.336.624-.054.235-.08.475-.08.72v1.6c0 .245.032.485.096.72s.17.448.32.64c.16.181.357.315.592.4.234.075.474.112.72.112ZM31.628 15V3.24h1.904v4.816c.096-.224.224-.432.384-.624.16-.203.346-.368.56-.496.213-.139.442-.235.688-.288.245-.064.49-.096.736-.096.277 0 .554.037.831.112.278.075.523.197.736.368.224.17.411.373.56.608.16.235.283.485.368.752.096.267.16.539.192.816.032.277.048.555.048.832V15h-1.904v-4.96c0-.235-.026-.464-.08-.688a1.595 1.595 0 0 0-.288-.624 1.17 1.17 0 0 0-.544-.416 1.73 1.73 0 0 0-.688-.144 1.73 1.73 0 0 0-.688.144 1.17 1.17 0 0 0-.543.416c-.14.181-.235.39-.288.624-.054.224-.08.453-.08.688V15h-1.904ZM43.493 15.128c-.32 0-.64-.027-.96-.08a4.029 4.029 0 0 1-.928-.272 3.586 3.586 0 0 1-.8-.528 3.006 3.006 0 0 1-.576-.752 3.204 3.204 0 0 1-.32-.896 4.884 4.884 0 0 1-.096-.96v-1.6c0-.32.027-.635.08-.944.064-.32.17-.619.32-.896.15-.288.342-.539.576-.752.246-.224.512-.4.8-.528a3.38 3.38 0 0 1 .896-.288c.32-.053.64-.08.96-.08.32 0 .635.027.944.08.32.053.624.15.912.288.288.128.55.304.784.528.246.213.443.464.592.752.15.277.25.576.304.896.064.31.096.624.096.944v1.6h-5.36c0 .245.032.49.096.736.064.235.176.443.336.624.17.181.374.315.608.4.246.075.49.112.736.112.17 0 .347-.01.528-.032.182-.032.352-.085.512-.16.16-.075.299-.181.416-.32a.853.853 0 0 0 .192-.48h1.904a2.735 2.735 0 0 1-.192.8 2.36 2.36 0 0 1-.416.704c-.17.203-.373.379-.608.528-.224.15-.47.267-.736.352a3.96 3.96 0 0 1-.8.176 6.71 6.71 0 0 1-.8.048Zm-1.776-5.088h3.456c0-.245-.032-.485-.096-.72a1.539 1.539 0 0 0-.336-.64 1.3 1.3 0 0 0-.592-.384 1.961 1.961 0 0 0-.704-.128c-.245 0-.485.043-.72.128a1.309 1.309 0 0 0-.576.384 1.54 1.54 0 0 0-.336.64 2.724 2.724 0 0 0-.096.72ZM48.543 15v-1.616h2.4V8.296h-2.144V6.68h4.032v6.704h1.144V15h-5.432Zm3.216-9.44c-.17 0-.341-.027-.512-.08a1.037 1.037 0 0 1-.432-.256 1.037 1.037 0 0 1-.256-.432 1.71 1.71 0 0 1-.08-.512c0-.17.027-.341.08-.512.053-.17.139-.315.256-.432.117-.117.261-.203.432-.256.17-.053.341-.08.512-.08.17 0 .341.027.512.08.17.053.315.139.432.256.117.117.203.261.256.432.053.17.08.341.08.512 0 .17-.027.341-.08.512-.053.17-.139.315-.256.432a1.037 1.037 0 0 1-.432.256c-.17.053-.341.08-.512.08ZM62.848 14.888c-.288 0-.57-.037-.848-.112a2.25 2.25 0 0 1-.768-.336 2.913 2.913 0 0 1-.592-.608 3.335 3.335 0 0 1-.384-.752 4.366 4.366 0 0 1-.208-.816A7.818 7.818 0 0 1 60 11.4V9.8c0-.288.016-.57.048-.848a4.32 4.32 0 0 1 .208-.832c.096-.267.224-.517.384-.752.17-.235.368-.432.592-.592.235-.17.49-.288.768-.352.277-.075.56-.112.848-.112.256 0 .507.027.752.08a2.073 2.073 0 0 1 1.232.8c.16.192.293.4.4.624V3h1.904v11.76h-1.904v-1.376c-.107.224-.24.437-.4.64-.15.192-.33.357-.544.496a2.052 2.052 0 0 1-.688.288c-.245.053-.496.08-.752.08Zm.768-1.616c.235 0 .464-.043.688-.128a1.33 1.33 0 0 0 .544-.416c.15-.181.25-.39.304-.624.053-.235.08-.47.08-.704V9.8c0-.235-.027-.47-.08-.704a1.485 1.485 0 0 0-.304-.624 1.212 1.212 0 0 0-.544-.4 1.73 1.73 0 0 0-.688-.144c-.235 0-.47.043-.704.128a1.425 1.425 0 0 0-.592.4c-.16.181-.272.39-.336.624a3.24 3.24 0 0 0-.08.72v1.6c0 .245.027.485.08.72.064.235.176.443.336.624.16.181.357.315.592.4.235.085.47.128.704.128ZM71.994 14.888c-.32 0-.64-.027-.96-.08a4.026 4.026 0 0 1-.928-.272 3.59 3.59 0 0 1-.8-.528 3.005 3.005 0 0 1-.576-.752 3.201 3.201 0 0 1-.32-.896 4.891 4.891 0 0 1-.096-.96V9.8c0-.32.026-.635.08-.944.064-.32.17-.619.32-.896.15-.288.341-.539.576-.752.245-.224.512-.4.8-.528a3.38 3.38 0 0 1 .896-.288c.32-.053.64-.08.96-.08.32 0 .634.027.944.08.32.053.624.15.912.288.288.128.55.304.784.528.245.213.442.464.592.752.15.277.25.576.304.896.064.31.096.624.096.944v1.6h-5.36c0 .245.032.49.096.736.064.235.176.443.336.624.17.181.373.315.608.4.245.075.49.112.736.112.17 0 .346-.01.528-.032.181-.032.352-.085.512-.16a1.21 1.21 0 0 0 .416-.32.852.852 0 0 0 .192-.48h1.904a2.738 2.738 0 0 1-.192.8 2.36 2.36 0 0 1-.416.704c-.17.203-.374.379-.608.528-.224.15-.47.267-.736.352a3.96 3.96 0 0 1-.8.176 6.707 6.707 0 0 1-.8.048ZM70.218 9.8h3.456c0-.245-.032-.485-.096-.72a1.54 1.54 0 0 0-.336-.64 1.3 1.3 0 0 0-.592-.384 1.961 1.961 0 0 0-.704-.128c-.246 0-.486.043-.72.128a1.309 1.309 0 0 0-.576.384 1.54 1.54 0 0 0-.336.64 2.724 2.724 0 0 0-.096.72ZM79.171 14.76a24.342 24.342 0 0 1-.544-1.2l-.511-1.216c-.16-.405-.315-.816-.465-1.232a28.55 28.55 0 0 1-.415-1.248c-.129-.427-.24-.853-.337-1.28a6.103 6.103 0 0 1-.144-1.312V6.44h1.904v.832c0 .352.027.704.08 1.056.064.352.134.699.209 1.04.085.341.176.683.272 1.024l.32 1.024.351.992c.118.33.24.661.368.992a37.199 37.199 0 0 0 .704-1.984c.118-.341.225-.683.32-1.024.107-.341.198-.683.272-1.024.086-.341.155-.688.208-1.04.064-.352.096-.704.096-1.056V6.44h1.904v.832c0 .437-.047.875-.144 1.312-.096.427-.207.853-.335 1.28a28.55 28.55 0 0 1-.416 1.248c-.15.416-.31.827-.48 1.232-.16.405-.326.81-.497 1.216-.17.405-.352.805-.544 1.2h-2.175ZM11.552 15.12a2.06 2.06 0 0 1-.624-.096 1.371 1.371 0 0 1-.528-.304 1.282 1.282 0 0 1-.32-.528 2.443 2.443 0 0 1 0-1.248c.064-.203.17-.379.32-.528.15-.15.325-.256.528-.32a2.06 2.06 0 0 1 1.248 0c.203.064.379.17.528.32.15.15.25.325.304.528a2.06 2.06 0 0 1 0 1.248 1.147 1.147 0 0 1-.304.528c-.15.139-.325.24-.528.304a2.06 2.06 0 0 1-.624.096ZM57.052 15.12a2.06 2.06 0 0 1-.624-.096 1.371 1.371 0 0 1-.528-.304 1.282 1.282 0 0 1-.32-.528 2.443 2.443 0 0 1 0-1.248c.064-.203.17-.379.32-.528.15-.15.325-.256.528-.32a2.06 2.06 0 0 1 1.248 0c.203.064.379.17.528.32.15.15.25.325.304.528a2.06 2.06 0 0 1 0 1.248 1.147 1.147 0 0 1-.304.528c-.15.139-.325.24-.528.304a2.06 2.06 0 0 1-.624.096ZM4.762 5.051a.337.337 0 0 0-.357 0C3.559 5.575 0 7.941 0 10.66c0 1.412 1.125 2.557 2.513 2.557.455 0 .88-.123 1.248-.338.105-.061.229.047.187.164a5.716 5.716 0 0 1-.818 1.529c-.132.175-.005.429.21.429h2.513c.216 0 .342-.254.21-.43a5.714 5.714 0 0 1-.812-1.509c-.041-.116.08-.225.186-.165.36.203.775.32 1.216.32 1.388 0 2.514-1.145 2.514-2.557 0-2.717-3.56-5.084-4.405-5.608Z"
      />
    </svg>
  );
};