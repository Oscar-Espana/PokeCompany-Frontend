import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { IJob } from "../../src/interfaces";
import { DefaultLayout } from "../../src/layouts";
import { JobList } from "../../src/components/jobs";
import { getAllJobs } from "../../src/api/jobs";

const Home: NextPage = () => {
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
      <JobList jobs={jobs} />
    </DefaultLayout>
  );
};

export default Home;
