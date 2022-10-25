import React from "react";

import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import FragmentsAndConditionalRendering from "./screens/FragmentsAndConditionalRendering";
import CustomizedTab from "./components/CustomizedTab";
import ListAndKeys from "./screens/ListAndKeys";
import Forms from "./screens/Forms";

const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);

  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#282c34",
      }}
    >
      <Container
        sx={{
          height: "90%",
          border: "1px solid #251e3e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {value === 0 && <FragmentsAndConditionalRendering />}
        {value === 1 ? <ListAndKeys /> : null}
        {value === 2 ? <Forms /> : null}

        {/* {value === 0 ? (
          <FragmentsAndConditionalRendering />
        ) : value === 1 ? (
          <ListAndKeys />
        ) : (
          <Forms />
        )} */}
      </Container>
      <Container sx={{ height: "10%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          color="#051e3e"
          sx={{ height: "10%", backgroundColor: "#251e3e", color: "white" }}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <CustomizedTab label="Fragments && Conditional rendering" />
          <CustomizedTab label="Lists and keys" />
          <CustomizedTab label="Forms" />
        </Tabs>
      </Container>
    </Container>
  );
};

export default App;
