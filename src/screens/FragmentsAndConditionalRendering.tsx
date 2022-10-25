import React, { useEffect } from "react";

import { CircularProgress, Box, Typography, Button } from "@mui/material";
import Table from "../components/Table";

type Response = {
  hourly: {
    temperature_2m?: number[];
    tim?: string[];
  };
};

const FragmentsAndConditionalRendering = () => {
  const [data, setData] = React.useState<any>();
  const [showMagic, setShowMagic] = React.useState(false);

  useEffect(() => {
    (async () => {
      // fetch weather data for brno, czech republic
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=49.22&longitude=16.62&hourly=temperature_2m"
      );
      const json: Response = await response.json();
      setData(json);
    })();
  }, []);

  if (showMagic) {
    return (
      <div style={{ color: "white" }}>
        {(true && <p>True</p>) || <p>true</p>}
        {false && <p>False</p>}
        {"" && <p>Empty string</p>}
        {[] && <p>Empty array</p>}
        {null && <p>Null</p>}
        {undefined && <p>Undefined</p>}

        <Button onClick={() => setShowMagic((prev) => !prev)}>
          show magic
        </Button>
      </div>
    );
  }

  return (
    <>
      <Typography variant="h4" sx={{ color: "white", marginBottom: 5 }}>
        Počasie Brno
      </Typography>
      <Box>
        {data ? (
          <Table data={data} />
        ) : (
          <CircularProgress sx={{ color: "#251e3e" }} />
        )}
      </Box>
      <Button
        sx={{ marginTop: 5 }}
        onClick={() => setShowMagic((prev) => !prev)}
      >
        show magic
      </Button>
    </>
  );
};

export default FragmentsAndConditionalRendering;
