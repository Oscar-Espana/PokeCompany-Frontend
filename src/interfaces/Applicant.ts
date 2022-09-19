export interface IApplicant {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  favoritePokemonId: number;
  description: string;
  jobId: string;
  status: string;
}
export interface IApplicantCreate extends Omit<IApplicant, "id" | "status"> {}
