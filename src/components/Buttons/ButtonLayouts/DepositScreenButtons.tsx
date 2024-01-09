import { getTranslatedText } from "@/Translations";
import { BankTransfer } from "@/assets/icons/BankTransfer";
import { InvestBlockchain } from "@/assets/icons/InvestBlockchain";
import { Neteller } from "@/assets/icons/Neteller";
import { PaymentCard } from "@/assets/icons/PaymentCard";
import { Skrill } from "@/assets/icons/Skrill";

interface ButtonData {
  icon: JSX.Element;
  title: string;
}

export const depositScreenButtons: ButtonData[] = [
  { icon: <PaymentCard />, title: getTranslatedText("Payment Card") },
  { icon: <BankTransfer />, title: getTranslatedText("Bank Transfer") },
  { icon: <Skrill />, title: getTranslatedText("Skrill") },
  { icon: <Neteller />, title: getTranslatedText("Neteller") },
  {
    icon: <InvestBlockchain />,
    title: getTranslatedText("Invest from Blockchain"),
  },
];
