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
      favoritePokemonId
      description
      jobId
      status
    }
  }
`;

export const getAllApplicants = async () => {
  const { data } = await clientPokemonCompany.query<{
    applicants: IApplicant[];
  }>({
    query: GET_ALL_APPLICANTS,
  });
  return data.applicants;
};
