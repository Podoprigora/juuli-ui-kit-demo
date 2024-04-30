import { ThemeProvider } from "~/components/theme";
import { Typography } from "~/components/typography";

import "@fontsource-variable/plus-jakarta-sans";

function App() {
  return (
    <ThemeProvider>
      <div>React App</div>
      <Typography level="h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem velit obcaecati repudiandae. Fugit ipsum
        dolore quo quasi eaque, voluptatum animi. Harum quod atque autem exercitationem et odit ipsam est dolores?
      </Typography>
      <Typography level="h2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem velit obcaecati repudiandae. Fugit ipsum
        dolore quo quasi eaque, voluptatum animi. Harum quod atque autem exercitationem et odit ipsam est dolores?
      </Typography>
      <Typography level="h3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem velit obcaecati repudiandae. Fugit ipsum
        dolore quo quasi eaque, voluptatum animi. Harum quod atque autem exercitationem et odit ipsam est dolores?
      </Typography>
      <Typography level="h4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem velit obcaecati repudiandae. Fugit ipsum
        dolore quo quasi eaque, voluptatum animi. Harum quod atque autem exercitationem et odit ipsam est dolores?
      </Typography>
    </ThemeProvider>
  );
}

export default App;
