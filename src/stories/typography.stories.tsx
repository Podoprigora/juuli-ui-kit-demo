import { Meta, StoryObj } from "@storybook/react";
import { Grid } from "~/components/grid";
import { Typography } from "~/components/typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;

export const Overview: StoryObj<typeof Typography> = {
  render(args) {
    return (
      <Grid container spacing={3} alignItems="center">
        <Grid xs={6}>
          <Typography level="h1">Heading 1</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography level="body-lg">Big body</Typography>
        </Grid>

        <Grid xs={6}>
          <Typography level="h2">Heading 2</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography level="body">Body</Typography>
        </Grid>

        <Grid xs={6}>
          <Typography level="h3">Heading 3</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography level="body-sm">Small body</Typography>
        </Grid>

        <Grid xs={6}>
          <Typography level="h4">Heading 4</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography level="button">Button & Links</Typography>
        </Grid>

        <Grid xs={6}>
          <Typography level="h5">Heading 5</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography level="body-xs">Sub text</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography level="h6">Heading 6</Typography>
        </Grid>
      </Grid>
    );
  },
};
