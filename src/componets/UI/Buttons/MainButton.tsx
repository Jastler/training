import { FC } from "react";
import Button from "@mui/material/Button";

export type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const MainButton: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
};
