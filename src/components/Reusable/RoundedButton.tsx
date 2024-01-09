import { getColorFromTheme } from "@/helpers/utils";
import ButtonBase, { ButtonBaseProps } from "@mui/material/ButtonBase";
import { useTheme } from "@mui/system";

interface ButtonProps extends ButtonBaseProps {
  filled?: boolean;
  color?: string; // Assuming "color" is a valid key in the theme palette
  bordered?: boolean;
  customStyles?: any;
}


const RoundedButton: React.FC<ButtonProps> = ({
  filled = true,
  color,
  bordered,
  onClick,
  children,
  customStyles,
  ...rest
}) => {
  const theme = useTheme();
  const resolvedColor = color ? getColorFromTheme(theme, color) : undefined;

  return (
    <ButtonBase
      sx={{
        borderRadius: "16px",
        padding: "8px 16px",
        backgroundColor: filled ? resolvedColor : "transparent",
        border: bordered ? `1px solid ${resolvedColor}` : "none",
        color: filled ? "#fff" : resolvedColor,
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        ...customStyles,
      }}
      {...rest}
      onClick={onClick}
    >
      {children || "RoundedButton"}
    </ButtonBase>
  );
};

export default RoundedButton;
