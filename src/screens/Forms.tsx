import { Box, Typography, Container } from "@mui/material";
import { useState } from "react";
import FormWrapper from "../components/FormWrapper";

const Forms = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <Typography variant="h4" sx={{ color: "white", marginY: 5 }}>
        Adresa dodania
      </Typography>
      <Container
        sx={{
          marginBottom: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormWrapper>
          <Typography variant="h4" sx={{ color: "white", marginY: 5 }}>
            controlled
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log({ email });
            }}
          >
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <button>Submit</button>
          </form>
        </FormWrapper>
        <FormWrapper>
          <Typography variant="h4" sx={{ color: "white", marginY: 5 }}>
            uncontrolled
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log({
                email: (e.target as any)["email"]?.value,
              });
            }}
          >
            <input id="email" />
            <button>Submit</button>
          </form>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Forms;
