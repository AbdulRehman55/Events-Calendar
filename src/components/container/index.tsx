import * as React from "react";
import { CssBaseline, Container as MuiContainer } from "@mui/material";

interface Iprops {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
}

export default function Container({ children, maxWidth }: Iprops): JSX.Element {
  return (
    <React.Fragment>
      <CssBaseline />
      <MuiContainer maxWidth={maxWidth}>{children}</MuiContainer>
    </React.Fragment>
  );
}
