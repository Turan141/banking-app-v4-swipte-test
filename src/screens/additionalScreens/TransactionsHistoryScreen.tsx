import { getTranslatedText } from "@/Translations";
import { BaseScreen } from "../bases/BaseScreen";
import { AccountHead } from "@/components/AccountHead";
import { BottomMenu } from "@/components/BottomMenu";
import { TransactionsHistory } from "@/components/TransactionsHistory/TransactionsHistory";

export const TransactionsHistoryScreen = () => {
  return (
    <BaseScreen
      head={<AccountHead title={getTranslatedText("TransactionsHistory")} />}
      bottom={<BottomMenu />}
    >
      <TransactionsHistory />
    </BaseScreen>
  );
};
