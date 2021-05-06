export interface ICaseService {
  getCases: () => Promise<ICase[]>;
}

export interface ICase {
  id: number;
  case: string;
}
