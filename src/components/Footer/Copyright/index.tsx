import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

interface CopyrightProps {}

export const Copyright: FC<CopyrightProps> = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/daniimara/react-nav">
        daniimara
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
