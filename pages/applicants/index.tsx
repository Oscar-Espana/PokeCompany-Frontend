import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { IApplicant } from "../../src/interfaces";
import { DefaultLayout } from "../../src/layouts";
import { getAllApplicants } from "../../src/api/applicant";
import { Typography } from "@mui/material";

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
      {applicants.map((item) => {
        return (
          <div>
            <h2>{item.fullName}</h2>
            <p>{item.email}</p>
            <p>{item.favoritePokemonId}</p>
          </div>
        );
      })}
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
