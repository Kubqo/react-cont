import { DataGrid, GridColDef } from "@mui/x-data-grid";

type Props = {
  data: {
    hourly: {
      temperature_2m: number[];
      time: string[];
    };
  };
};

const Table = ({ data }: Props) => {
  const columns: GridColDef[] | undefined = [
    {
      field: "time",
      headerName: "Čas",
      width: 150,
    },
    {
      field: "temperature",
      headerName: "Teplota",
      width: 130,
    },
  ];

  const rows = data.hourly?.temperature_2m?.map((temperature, index) => {
    const time = new Date(data.hourly?.time[index]);

    // format date and hours
    return {
      id: index,
      temperature: temperature,
      time: `${
        time.getHours() < 10 ? "0" : ""
      }${time.getHours()}:00 - ${time.getDate()}.${
        time.getMonth() + 1
      }.${time.getFullYear()}`,
    };
  });

  return (
    <DataGrid
      sx={{ height: 500, width: 350, color: "white" }}
      rows={rows ?? []}
      columns={columns ?? []}
      pageSize={7}
      rowsPerPageOptions={[7]}
      checkboxSelection
    />
  );
};

export default Table;
