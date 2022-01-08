import { Member } from "../types/member.types";

export const getCompanyMembers = (company: string): Promise<Member[]> => {
  return fetch(`https://api.github.com/orgs/${company}/members`)
    .then((response) => response.json())
    .then((data) => data);
};
