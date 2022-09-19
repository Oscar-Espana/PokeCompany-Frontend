import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { IJob } from "../../interfaces";

interface Props {
  job: IJob;
}
export const JobCard: FC<Props> = ({ job }) => {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card>
        <CardContent>
          <Typography variant="h2" fontWeight={500}>
            {job.title}
          </Typography>
          <Typography>{job.description}</Typography>
          <Box display="flex" justifyContent="end">
            <Button color="secondary" sx={{ mt: 2 }}>
              Apply
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
