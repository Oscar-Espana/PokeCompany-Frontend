import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { IJob } from "../../src/interfaces";
import { DefaultLayout } from "../../src/layouts";
import { getSingleJob } from "../../src/api/jobs";
import { Grid, Typography } from "@mui/material";

interface Props {
  job: IJob;
}
const JobDetailsPage: NextPage<Props> = ({ job }) => {
  return (
    <DefaultLayout
      title={`${job.title} - PokeCompany`}
      pageDescription={job.description}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h1">{`Apply for ${job.title}`}</Typography>
          <Typography variant="subtitle1" fontWeight={400} mb={3}>
            {job.description}
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

  const job = await getSingleJob(id);

  return {
    props: {
      job,
    },
  };
};

export default JobDetailsPage;
