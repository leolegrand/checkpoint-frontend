import { gql } from "@apollo/client";

export const LIST_COUNTRIES = gql`
  query Countries {
  countries {
    name
    code
    continent {
      id
      name
    }
    emoji
    id
  }
}
`;

export const FIND_COUNTRY = gql`
query findCountry($code: String!) {
  country(code: $code) {
    code
    continent {
      id
      name
    }
    emoji
    id
    name
  }
}
`;

