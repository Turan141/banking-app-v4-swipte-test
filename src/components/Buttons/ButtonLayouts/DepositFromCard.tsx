import { NewCard } from "@/assets/icons/NewCard";
import { S_PRESENT_SCREEN_ON_MAIN, Screens } from "@/Presenter";
import { getTranslatedText } from "@/Translations";
import { Link } from "@mui/material";

interface ButtonData {
  icon: JSX.Element;
  title: string;
  onClick?: () => void;
}

export const DepositFromCardButtons: ButtonData[] = [
  {
    icon: <NewCard />,
    title: getTranslatedText("OrderNewCard"),
    onClick: () => {
      S_PRESENT_SCREEN_ON_MAIN.invoke({
        screen: Screens.NEW_CARD_ORDER_SCREEN,
        animationDirection: "right",
      });
    },
  },
  { icon: <Link />, title: getTranslatedText("Add Card"), onClick: () => {} },
];
