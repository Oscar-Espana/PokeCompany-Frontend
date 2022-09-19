import { gql } from "@apollo/client";
import { clientPokemonCompany } from "../../lib/apollo-client";

const APPLICANT_HIRED = gql`
  mutation ApplicantHired($applicantId: String) {
    applicantHired(applicantId: $applicantId)
  }
`;

export const applicantHired = async (applicantId: string) => {
  const { errors } = await clientPokemonCompany.mutate({
    mutation: APPLICANT_HIRED,
    variables: {
      applicantId,
    },
  });
  if (errors) {
    throw new Error(errors[0].message || "An unexpected error has occurred");
  }
  return "The applicant has been hired";
};
