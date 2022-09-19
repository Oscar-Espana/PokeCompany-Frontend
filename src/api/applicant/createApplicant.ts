import { gql } from "@apollo/client";
import { clientPokemonCompany } from "../../lib/apollo-client";
import { IApplicantCreate } from "../../interfaces";

const CREATE_APPLICANT = gql`
  mutation ApplicantCreate($applicant: ApplicantInput) {
    applicantCreate(applicant: $applicant) {
      id
      fullName
      email
      phoneNumber
      favoritePokemon {
        id
        name
        img
      }
      description
      job {
        id
        title
        description
      }
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
