import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { IApplicant, IApplicantCreate } from "../../src/interfaces";
import { DefaultLayout } from "../../src/layouts";
import { Grid, Typography } from "@mui/material";
import { createApplicant, getSingleApplicant } from "../../src/api/applicant";

interface Props {
  applicant: IApplicant;
}
const ApplicantDetailsPage: NextPage<Props> = ({ applicant }) => {
  const handleConfirm = async () => {};

  return (
    <DefaultLayout
      title={`${applicant.fullName} - PokeCompany`}
      pageDescription={applicant.description}
    >
      <Grid container rowSpacing={3} columnSpacing={10}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1">{`Appicant: ${applicant.fullName}`}</Typography>
          <Typography variant="subtitle1" fontWeight={400} mb={3}>
            {applicant.description}
          </Typography>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id = "" } = params as { id: string };

  if (id.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  const applicant = await getSingleApplicant(id);

  return {
    props: {
      applicant,
    },
  };
};

export default ApplicantDetailsPage;
