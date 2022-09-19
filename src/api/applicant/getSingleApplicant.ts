import { gql } from "@apollo/client";
import { clientPokemonCompany } from "../../lib/apollo-client";
import { IJob } from "../../interfaces";

const GET_SINGLE_APPLICANT = gql`
  query Applicant($applicantId: String!) {
    applicant(id: $applicantId) {
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

export const getSingleApplicant = async (id: string) => {
  const { data } = await clientPokemonCompany.query<{ applicant: IJob }>({
    query: GET_SINGLE_APPLICANT,
    variables: {
      applicantId: id,
    },
  });
  return data.applicant;
};
