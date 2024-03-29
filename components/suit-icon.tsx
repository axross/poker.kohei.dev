import { Suit } from "holdem";
import { FC, SVGAttributes } from "react";

export interface SuitIconProps extends SuitIconBaseProps {
  suit?: Suit;
}

export const SuitIcon: FC<SuitIconProps> = ({ suit, ...props }) => {
  switch (suit) {
    case Suit.Spade:
      return <SpadeIcon {...props} />;
    case Suit.Heart:
      return <HeartIcon {...props} />;
    case Suit.Diamond:
      return <DiamondIcon {...props} />;
    case Suit.Club:
      return <ClubIcon {...props} />;
    default:
      return <WildIcon {...props} />;
  }
};

export type SuitIconBaseProps = SVGAttributes<SVGElement>;

export const SpadeIcon: FC<SuitIconBaseProps> = (props) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M12.524 2.103a.673.673 0 0 0-.715 0C10.12 3.15 3 7.883 3 13.318c0 2.824 2.25 5.114 5.027 5.114.909 0 1.76-.246 2.495-.676.211-.123.457.095.375.329A11.431 11.431 0 0 1 9.26 21.14c-.263.35-.01.859.42.859h5.026c.431 0 .684-.509.42-.86a11.429 11.429 0 0 1-1.623-3.018c-.083-.232.16-.45.371-.33.72.407 1.55.64 2.432.64 2.777 0 5.027-2.29 5.027-5.114 0-5.434-7.118-10.168-8.81-11.215Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const HeartIcon: FC<SuitIconBaseProps> = (props) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M2 8.64C2 5.524 4.455 3 7.484 3c1.501 0 2.86.621 3.85 1.626a.933.933 0 0 0 1.332 0A5.386 5.386 0 0 1 16.516 3C19.545 3 22 5.525 22 8.64c0 5.824-7.335 11.122-9.441 12.523-.34.227-.777.227-1.118 0C9.336 19.763 2 14.463 2 8.64Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DiamondIcon: FC<SuitIconBaseProps> = (props) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M12.56 2.277c2.4 3.103 6.06 6.762 9.163 9.162a.707.707 0 0 1 0 1.122c-3.103 2.4-6.762 6.059-9.162 9.162a.707.707 0 0 1-1.122 0c-2.4-3.103-6.059-6.762-9.162-9.162a.707.707 0 0 1 0-1.122c3.103-2.4 6.762-6.059 9.162-9.162a.707.707 0 0 1 1.122 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ClubIcon: FC<SuitIconBaseProps> = (props) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M18.659 9.879a4.606 4.606 0 0 0-4.377 2.512 1.47 1.47 0 0 1-.841.741l-.014.005a.447.447 0 0 1-.579-.492c.108-.718.278-1.416.504-2.09a1.46 1.46 0 0 1 .733-.832 4.605 4.605 0 0 0 2.52-4.382c-.134-2.335-2.077-4.243-4.414-4.337a4.613 4.613 0 0 0-4.804 4.609 4.606 4.606 0 0 0 2.534 4.112c.34.173.605.464.726.826.226.674.397 1.374.505 2.094a.447.447 0 0 1-.579.492l-.014-.005a1.47 1.47 0 0 1-.84-.74 4.605 4.605 0 0 0-4.378-2.513c-2.335.134-4.243 2.077-4.337 4.414a4.613 4.613 0 0 0 4.609 4.804 4.606 4.606 0 0 0 4.105-2.52c.178-.347.473-.62.844-.742l.013-.005a.447.447 0 0 1 .578.492 12.36 12.36 0 0 1-2.537 5.857.51.51 0 0 0 .404.82h5.96a.51.51 0 0 0 .404-.82 12.36 12.36 0 0 1-2.537-5.857.447.447 0 0 1 .578-.491 1.477 1.477 0 0 1 .857.747 4.605 4.605 0 0 0 4.105 2.519 4.613 4.613 0 0 0 4.61-4.804c-.095-2.337-2.003-4.28-4.338-4.414Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const WildIcon: FC<SuitIconBaseProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="m16.744 22.366 3.317-2.435-4.702-6.507L23 10.947 21.698 7l-7.64 2.477V1.5H9.942v8.02L2.302 7.041 1 10.989l7.641 2.477L3.94 19.93l3.359 2.435L12 15.86l4.744 6.507Z"
        fill="currentColor"
      />
    </svg>
  );
};
