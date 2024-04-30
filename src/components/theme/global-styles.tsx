import JoyGlobalStyles from "@mui/joy/GlobalStyles";

export const GlobalStyles = () => {
  return (
    <JoyGlobalStyles
      styles={{
        html: {
          fontSize: "62.5%", // Normalize font-size 10px / 16px (default)
          width: "100%",
          height: "100%",
        },
        body: {
          width: "100%",
          height: "100%",
        },
      }}
    />
  );
};
