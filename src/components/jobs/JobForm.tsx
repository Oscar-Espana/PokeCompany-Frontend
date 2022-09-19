import React, { FC } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { Input } from "../ui";
import { IApplicantCreate } from "../../interfaces";
import { Box, Button } from "@mui/material";

interface Props {
  jobId: string;
  onSubmit: (
    values: IApplicantCreate,
    actions: FormikHelpers<IApplicantCreate>
  ) => void;
}
export const JobForm: FC<Props> = ({ jobId, onSubmit }) => {
  const initialForm: IApplicantCreate = {
    fullName: "",
    email: "",
    phoneNumber: "",
    favoritePokemonId: 1,
    description: "",
    jobId: jobId,
  };
  return (
    <Box
      sx={{
        backgroundColor: "rgb(239, 240, 242)",
        px: 4,
        py: 4,
        borderRadius: 4,
      }}
    >
      <Formik initialValues={initialForm} onSubmit={onSubmit}>
        <Form>
          <Input name="fullName" label="Full name" />
          <Input name="email" label="Email" />
          <Input name="phoneNumber" label="Phone number" />
          <Input
            name="favoritePokemonId"
            label="Favorite pokemon"
            type="number"
          />
          <Input name="description" label="Description" />
          <Box display="flex" justifyContent="end">
            <Button type="submit" color="secondary" size="large" sx={{ mt: 2 }}>
              Apply
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};
