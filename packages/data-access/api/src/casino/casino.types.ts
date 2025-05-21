export interface CasinoGame {
  name: string;
  url: string;
  imageUrl: string;
  provider: string;
}

export interface GameProvider {
  name: string;
  icon: string | null;
}

export interface GetProvidersResponse {
  data: GameProvider[];
}

export interface GetCasinoGamesRequestParams {
  page: number;
  count: number;
  providerFilter?: string[];
  filter?: string[];
}
export interface InitCasinoGamesRequestParams {
  aggregator: string;
  url: string;
  demo: boolean;
  locale: string;
  mobile: boolean;
}

export interface InitCasinoGamesResponse {
  url: string;
}

export interface GetCasinoGamesErrorResponse {
  propertyName: string;
  errorMessage: string;
  attemptedValue: number;
  customState: null;
  severity: number;
  errorCode: string;
  formattedMessagePlaceholderValues: {
    ComparisonValue: number;
    ComparisonProperty: string;
    PropertyName: string;
    PropertyValue: number;
    PropertyPath: string;
  };
}

export interface GetCasinoGamesResponse {
  count: number;
  data: CasinoGame[];
}
