import { useState } from "react";
import { Input, InputProps } from "../Input";

export const PasswordInput: React.FC<Omit<InputProps, "password">> = props => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <Input
      {...props}
      password={{ isHidden, setIsHidden }}
      secureTextEntry={isHidden}
      keyboardType={!isHidden ? "visible-password" : undefined}
    />
  );
};
