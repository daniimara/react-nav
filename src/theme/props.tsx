import { Theme } from "@material-ui/core";

export type ContainerMaxWidth = "xs" | "sm" | "md" | "lg" | "xl" | false;

const propsFactory = (defaultTheme: Theme) => ({
  MuiContainer: {
    maxWidth: false as ContainerMaxWidth
  }
});

export default propsFactory;
