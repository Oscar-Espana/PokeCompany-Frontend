import { gql } from "@apollo/client";
import { clientPokemonCompany } from "../../lib/apollo-client";
import { IApplicant, IJob } from "../../interfaces";

const GET_SINGLE_APPLICANT = gql`
  query Applicant($applicantId: String!) {
    applicant(id: $applicantId) {
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

export const getSingleApplicant = async (id: string) => {
  const { data } = await clientPokemonCompany.query<{ applicant: IApplicant }>({
    query: GET_SINGLE_APPLICANT,
    variables: {
      applicantId: id,
    },
  });
  return data.applicant;
};
