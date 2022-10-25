import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const FormWrapper = ({ children }: Props) => {
  return (
    <Box
      sx={{
        margin: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

export default FormWrapper;
