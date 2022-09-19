import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { IJob } from "../../src/interfaces";
import { DefaultLayout } from "../../src/layouts";
import { JobList } from "../../src/components/jobs";
import { getAllJobs } from "../../src/api/jobs";
import { Typography } from "@mui/material";

const JobPage: NextPage = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);

  const getJobsData = async () => {
    const allJobs = await getAllJobs();
    setJobs(allJobs);
  };
  useEffect(() => {
    getJobsData();
  }, []);

  return (
    <DefaultLayout
      title="Home - Company Pokemon"
      pageDescription="Discover everything that PokeCompany offers for you to become a pokemon master"
    >
      <Typography variant="h1">Jobs in PokeCompany</Typography>
      <Typography variant="subtitle1" fontWeight={400} mb={3}>
        Find the best job for you, get in touch with us!
      </Typography>
      <JobList jobs={jobs} />
    </DefaultLayout>
  );
};

export default JobPage;
