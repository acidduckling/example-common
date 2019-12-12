import { Lodgement } from '@frl/common/model/lodgement.interface';

export interface Pagination {
  page: number;
  size: number;
}

export interface Criteria {
  name: string;
  value: string;
}

export interface LodgementState {
  lodgements: Lodgement[];
  pagination: Pagination;
  criteria: string;
}

export interface LodgementApiState {
  lodgements: Lodgement[];
  criteria?: Criteria;
  pagination: Pagination;
}
