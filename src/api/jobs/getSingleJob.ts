import { gql } from "@apollo/client";
import { clientPokemonCompany } from "../../lib/apollo-client";
import { IJob } from "../../interfaces";

const GET_SINGLE_JOB = gql`
  query Job($jobId: String!) {
    job(id: $jobId) {
      id
      title
      description
    }
  }
`;

export const getSingleJob = async (id: string) => {
  const { data } = await clientPokemonCompany.query<{ job: IJob }>({
    query: GET_SINGLE_JOB,
    variables: {
      jobId: id,
    },
  });
  return data.job;
};
