import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import NextLink from "next/link";
import { Box, Chip, Link, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { IApplicant } from "../../src/interfaces";
import { DefaultLayout } from "../../src/layouts";
import { getAllApplicants } from "../../src/api/applicant";
import Image from "next/image";

const columns: GridColDef[] = [
  {
    field: "fullName",
    headerName: "Full name",
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      return params.row.status === "hired" ? (
        <>{params.row.fullName}</>
      ) : (
        <NextLink href={`/applicants/${params.row.id}`} passHref>
          <Link underline="always">{params.row.fullName}</Link>
        </NextLink>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phoneNumber", headerName: "Phone Number", width: 150 },
  {
    field: "job",
    headerName: "Job",
    width: 250,
    renderCell: (params: GridRenderCellParams) => {
      const titleJob = params.row.job?.title || "N/A";
      return <>{titleJob}</>;
    },
  },
  {
    field: "favoritePokemon",
    headerName: "Favorite Pokemon",
    width: 250,
    renderCell: (params: GridRenderCellParams) => {
      const image = params.row.favoritePokemon?.img || "";
      const namePokemon = params.row.favoritePokemon?.name || "";
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Image src={image} alt={params.row.fullName} width={40} height={40} />
          <Typography textTransform="capitalize" variant="body2">
            {namePokemon}
          </Typography>
        </Box>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      console.log("statis", params.row.status === "hired");
      return params.row.status === "hired" ? (
        <Chip color="success" label="Hired" />
      ) : (
        <Chip color="error" label="Pending" />
      );
    },
  },
];

interface Props {
  applicants: IApplicant[];
}
const ApplicantPage: NextPage<Props> = ({ applicants }) => {
  return (
    <DefaultLayout
      title="Applicants - PokeCompany"
      pageDescription="Applicants availables in PokeCompany"
    >
      <Typography variant="h1">Applicant administration</Typography>
      <Typography variant="subtitle1" fontWeight={400} mb={3}>
        All applicants availables in PokeCompany
      </Typography>
      <Box height={500}>
        <DataGrid
          rows={applicants}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </Box>
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (req) => {
  const applicants = await getAllApplicants();

  return {
    props: {
      applicants,
    },
  };
};

export default ApplicantPage;
