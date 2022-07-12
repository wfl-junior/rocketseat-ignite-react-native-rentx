import { useState } from "react";
import { Input } from "../Input";

export const PasswordInput: React.FC<
  React.ComponentProps<typeof Input>
> = props => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <Input
      autoCorrect={false}
      autoCapitalize="none"
      {...props}
      password={{ isHidden, setIsHidden }}
      secureTextEntry={isHidden}
      keyboardType={!isHidden ? "visible-password" : undefined}
    />
  );
};
