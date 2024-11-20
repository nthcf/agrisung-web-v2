export type AsProp<T extends React.ElementType> = {
  as?: T;
};

export type OmitProps<T extends React.ElementType, U> = keyof (AsProp<T> & U);

export type PolyProps<
  T extends React.ElementType,
  U = unknown,
> = React.PropsWithChildren<U & AsProp<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, OmitProps<T, U>>;

export type PolyRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

export type PolyWithRefProps<
  T extends React.ElementType,
  U = unknown,
> = PolyProps<T, U> & {
  ref?: PolyRef<T>;
};

export type Dispatch<A> = (value: A | ((prev: A) => A)) => void;
