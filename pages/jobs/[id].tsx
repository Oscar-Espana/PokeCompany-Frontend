import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { IApplicantCreate, IJob } from "../../src/interfaces";
import { DefaultLayout } from "../../src/layouts";
import { getSingleJob } from "../../src/api/jobs";
import { Grid, Typography } from "@mui/material";
import { JobForm } from "../../src/components/jobs";
import { FormikHelpers } from "formik";

interface Props {
  job: IJob;
}
const JobDetailsPage: NextPage<Props> = ({ job }) => {
  const handleSubmitForm = (
    values: IApplicantCreate,
    actions: FormikHelpers<IApplicantCreate>
  ) => {};

  return (
    <DefaultLayout
      title={`${job.title} - PokeCompany`}
      pageDescription={job.description}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1">{`Apply for ${job.title}`}</Typography>
          <Typography variant="subtitle1" fontWeight={400} mb={3}>
            {job.description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <JobForm jobId={job.id} onSubmit={handleSubmitForm} />
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

  const job = await getSingleJob(id);

  return {
    props: {
      job,
    },
  };
};

export default JobDetailsPage;
