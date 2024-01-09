import { getTranslatedText } from "@/Translations";
import { CustomAvatar } from "@/components/Avatars/CustomAvatar";
import { Box, Typography } from "@mui/material";

interface TransactionBlockProps {
  iban?: string;
  accountLabel: string;
  url?: string;
}
export const TransactionBlock: React.FC<TransactionBlockProps> = ({
  iban,
  accountLabel,
  url,
}) => {

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "bgFront.main",
        borderRadius: "8px",
        padding: "8px 12px",
        alignItems: "center",
      }}
    >
      <Box sx={{ mr: 2 }}>
        <CustomAvatar alt="avatar" size={32} src={url} />
      </Box>

      <Box display="flex" flexDirection="column">
        <Typography
          sx={{
            color: "contentPrimary.main",
            fontSize: "16px",
            fontWeight: "--fontRegular400",
          }}
        >
          {getTranslatedText(accountLabel)}
        </Typography>

        <Typography
          sx={{
            color: "contentQuaternary.main",
            fontSize: "12px",
            fontWeight: "--fontRegular400",
          }}
        >
          {iban}
        </Typography>
      </Box>
    </Box>
  );
};
