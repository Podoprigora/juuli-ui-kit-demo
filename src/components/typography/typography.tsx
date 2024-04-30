import JoyTypography, { TypographyProps as JoyTypographyProps } from "@mui/joy/Typography";

export interface TypographyProps
  extends Pick<
    JoyTypographyProps,
    "level" | "children" | "color" | "component" | "endDecorator" | "gutterBottom" | "noWrap" | "startDecorator" | "sx"
  > {}

/**
 * The Typography component helps maintain a consistent design by providing a limited set of values to choose from and convenient props
 * for building common designs faster.
 * Full docs: https://mui.com/joy-ui/api/typography/
 */
export const Typography = (props: TypographyProps) => {
  return <JoyTypography {...props} />;
};
