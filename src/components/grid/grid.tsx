import JoyGrid, { GridProps as JoyGridProps } from "@mui/joy/Grid";

export interface GridProps extends JoyGridProps {}

export const Grid = (props: GridProps) => {
  return <JoyGrid {...props} />;
};
