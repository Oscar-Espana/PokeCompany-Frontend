import { gql } from "@apollo/client";
import { clientPokemonCompany } from "../../lib/apollo-client";
import { IApplicant, IJob } from "../../interfaces";

const GET_ALL_APPLICANTS = gql`
  query Applicants {
    applicants {
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

export const getAllApplicants = async () => {
  const { data } = await clientPokemonCompany.query<{
    applicants: IApplicant[];
  }>({
    query: GET_ALL_APPLICANTS,
    fetchPolicy: "no-cache",
  });
  return data.applicants;
};
