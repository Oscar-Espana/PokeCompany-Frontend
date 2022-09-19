import { gql } from "@apollo/client";
import { clientPokemonCompany } from "../../lib/apollo-client";

const APPLICANT_REJECT = gql`
  mutation ApplicantReject($applicantId: String) {
    applicantReject(applicantId: $applicantId)
  }
`;

export const applicantReject = async (applicantId: string) => {
  const { errors } = await clientPokemonCompany.mutate({
    mutation: APPLICANT_REJECT,
    variables: {
      applicantId,
    },
  });
  if (errors) {
    throw new Error(errors[0].message || "An unexpected error has occurred");
  }
  return "The applicant has been reject";
};
