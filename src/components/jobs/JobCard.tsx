import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import NextLink from "next/link";
import { IJob } from "../../interfaces";

const MAX_LENGTH_DESCRIPTION = 200;

interface Props {
  job: IJob;
}
export const JobCard: FC<Props> = ({ job }) => {
  let descriptionJob = job.description;
  descriptionJob =
    descriptionJob.length >= MAX_LENGTH_DESCRIPTION
      ? `${descriptionJob.substring(0, MAX_LENGTH_DESCRIPTION)}...`
      : descriptionJob;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <NextLink href={`/jobs/${job.id}`} passHref prefetch={false}>
          <Link>
            <CardContent>
              <Typography variant="h2" fontWeight={500}>
                {job.title}
              </Typography>
              <Typography>{descriptionJob}</Typography>
              <Box display="flex" justifyContent="end">
                <Button color="secondary" sx={{ mt: 2 }}>
                  Apply
                </Button>
              </Box>
            </CardContent>
          </Link>
        </NextLink>
      </Card>
    </Grid>
  );
};
