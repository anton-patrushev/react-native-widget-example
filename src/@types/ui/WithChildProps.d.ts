export declare global {
  export interface WithChildProps {
    children: React.JSX.Element | React.JSX.Element[];
  }

  export type WithOptionalChildProps = Partial<WithChildProps>;
}
