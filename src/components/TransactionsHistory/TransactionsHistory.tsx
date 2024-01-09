import { Box } from "@mui/material";
import { useState } from "preact/hooks";
import { REQ_TRANSACTIONS_HISTORY } from "@/managers/AccounHomeManager";
import { Loading } from "@/components/Reusable/Loading";
import { TransactionOperation } from "./TransactionOperation";
import { SwipeableScreen } from "@/screens/additionalScreens/SwipeableScreen";

export const TransactionsHistory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactionsOperationHistory] = REQ_TRANSACTIONS_HISTORY.useRequest(
    () => setIsLoading(false)
  ); // trigger fetch from db

  if (isLoading) return <Loading />;

  return (
    <Box
      sx={{
        backgroundColor: "backgroundDefault.main",
        width: "100%",
        marginTop: "65px",
        pl: 2,
        pr: 2,
      }}
    >
      {/* //todo: replace any`` */}
      <SwipeableScreen>
        <p>dwadwa</p>
      </SwipeableScreen>


      {Object.entries(transactionsOperationHistory as any).map(
        ([key, value]) => {
          const timestamp = (new Date(key).getTime() / 1000).toString();
          return (
            <TransactionOperation
              date={timestamp}
              operation={value as ITransactionOperation[]}
              stickyDate
            />
          );
        }
      )}
    </Box>
  );
};
