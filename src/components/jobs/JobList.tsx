import React, { FC } from "react";
import { Grid } from "@mui/material";
import { IJob } from "../../interfaces";
import { JobCard } from "./JobCard";

interface Props {
  jobs: IJob[];
}
export const JobList: FC<Props> = ({ jobs }) => {
  return (
    <Grid container spacing={4}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Grid>
  );
};
