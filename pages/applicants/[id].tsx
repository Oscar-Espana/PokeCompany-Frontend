import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { IApplicant } from "../../src/interfaces";
import { DefaultLayout } from "../../src/layouts";
import { Button, Divider, Grid, Typography } from "@mui/material";
import {
  applicantHired,
  applicantReject,
  getSingleApplicant,
} from "../../src/api/applicant";
import Image from "next/image";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

interface Props {
  applicant: IApplicant;
}
const ApplicantDetailsPage: NextPage<Props> = ({ applicant }) => {
  const router = useRouter();

  const handleHired = async () => {
    const response = await applicantHired(applicant.id);
    alert(response);
    router.replace("/applicants");
  };

  const handleReject = async () => {
    const response = await applicantReject(applicant.id);
    alert(response);
    router.replace("/applicants");
  };

  return (
    <DefaultLayout
      title={`${applicant.fullName} - PokeCompany`}
      pageDescription={applicant.description}
    >
      <Grid container rowSpacing={3} columnSpacing={10}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1">{`Appicant: ${applicant.fullName}`}</Typography>
          <Typography variant="body1" fontWeight={400} my={1}>
            {applicant.email}
          </Typography>
          <Typography variant="body1" fontWeight={400} mb={1}>
            {applicant.phoneNumber}
          </Typography>
          <Typography variant="body1" fontWeight={400}>
            {applicant.description}
          </Typography>
          <Divider sx={{ my: 4 }} />
          <Typography
            variant="h2"
            fontWeight={500}
            textTransform="capitalize"
            mb={1}
          >{`Favorite pokemon: ${applicant.favoritePokemon.name}`}</Typography>

          <Image
            src={applicant.favoritePokemon.img}
            alt={applicant.favoritePokemon.name}
            width={200}
            height={200}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            fontWeight={500}
          >{`Job: ${applicant.job.title}`}</Typography>
          <Typography variant="body1" fontWeight={400} my={1}>
            {applicant.job.description}
          </Typography>
          <Box mt={2} sx={{ display: "flex", gap: 2 }}>
            <Button size="medium" color="error" onClick={handleReject}>
              Reject
            </Button>
            <Button
              size="medium"
              color="secondary"
              variant="outlined"
              onClick={handleHired}
            >
              Hire
            </Button>
          </Box>
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
