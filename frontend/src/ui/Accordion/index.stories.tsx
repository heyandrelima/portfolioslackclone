import ThemeContext from "../../context/Theme";
import { defaultTheme } from "../../themes";
import Accordion from "./index";

const Story = {
  title: "UI/Accordion",
  component: Accordion,
};

export const Default = () => {
  return (
    <ThemeContext theme={defaultTheme}>
      <Accordion>
        {({ Option }) => (
          <>
            <Option title={<h2>Title</h2>}>
              <p>Option</p>
            </Option>
          </>
        )}
      </Accordion>
    </ThemeContext>
  );
};

export default Story;
