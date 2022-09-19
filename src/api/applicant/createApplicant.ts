import { gql } from "@apollo/client";
import { clientPokemonCompany } from "../../lib/apollo-client";
import { IApplicantCreate, IJob } from "../../interfaces";

const CREATE_APPLICANT = gql`
  mutation ApplicantCreate($applicant: ApplicantInput) {
    applicantCreate(applicant: $applicant) {
      id
      fullName
      email
      phoneNumber
      favoritePokemonId
      description
      jobId
      status
    }
  }
`;

export const createApplicant = async (applicant: IApplicantCreate) => {
  const { errors } = await clientPokemonCompany.mutate({
    mutation: CREATE_APPLICANT,
    variables: {
      applicant,
    },
  });
  if (errors) {
    throw new Error(errors[0].message || "An unexpected error has occurred");
  }
  return "Your request has been received successfully";
};
