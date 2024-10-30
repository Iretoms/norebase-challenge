import { CoinTickers } from "./types";

import { ApiResponse } from "@/types";
import { API_URL } from "@/constants";
import { Api } from "@/helpers/api";

export class CoinTickersService {
  static getCoinTickers() {
    return Api.get<ApiResponse<CoinTickers[]>>(`${API_URL}/tickers/?limit=100`);
  }
}
