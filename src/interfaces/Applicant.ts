import { IJob } from "./Job";
import { ISmallPokemon } from "./Pokemon";

export interface IApplicant {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  favoritePokemon: ISmallPokemon;
  description: string;
  job: IJob;
  status: string;
}
export interface IApplicantCreate
  extends Omit<IApplicant, "id" | "status" | "favoritePokemon" | "job"> {
  favoritePokemonId: number;
  jobId: string;
}
