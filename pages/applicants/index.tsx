import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import NextLink from "next/link";
import { Box, Chip, Link, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { IApplicant } from "../../src/interfaces";
import { DefaultLayout } from "../../src/layouts";
import { getAllApplicants } from "../../src/api/applicant";

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
  { field: "jobId", headerName: "Job", width: 250 },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
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
