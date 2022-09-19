import { gql } from "@apollo/client";
import { clientPokemonCompany } from "../../lib/apollo-client";
import { IJob } from "../../interfaces";

const GET_ALL_JOBS = gql`
  query Jobs {
    jobs {
      id
      title
      description
    }
  }
`;

export const getAllJobs = async (page: number = 0) => {
  const { data } = await clientPokemonCompany.query<{ jobs: IJob[] }>({
    query: GET_ALL_JOBS,
  });
  return data.jobs;
};
