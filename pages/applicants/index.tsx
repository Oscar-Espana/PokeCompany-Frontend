import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { IApplicant, IJob } from "../../src/interfaces";
import { DefaultLayout } from "../../src/layouts";
import { JobList } from "../../src/components/jobs";
import { getAllApplicants } from "../../src/api/applicant";
import { Typography } from "@mui/material";

const JobPage: NextPage = () => {
  const [applicants, setApplicants] = useState<IApplicant[]>([]);

  const getApplicantsData = async () => {
    const allApplicants = await getAllApplicants();
    setApplicants(allApplicants);
  };
  useEffect(() => {
    getApplicantsData();
  }, []);

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

export default JobPage;
