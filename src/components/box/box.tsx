import JoyBox, { BoxProps as JoyBoxProps } from "@mui/joy/Box";

export interface BoxProps extends JoyBoxProps {}

export const Box = (props: BoxProps) => {
  return <JoyBox {...props} />;
};
