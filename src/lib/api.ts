
import { toast } from "@/hooks/use-toast";

const API_KEY = "f3a007b7f0f401a9ddb170e784d0a71b";
const BASE_URL = "https://v3.football.api-sports.io";

interface ApiResponse<T> {
  errors: string[];
  get: string;
  paging: {
    current: number;
    total: number;
  };
  parameters: Record<string, unknown>;
  response: T;
  results: number;
}

const headers = {
  "x-rapidapi-host": "v3.football.api-sports.io",
  "x-rapidapi-key": API_KEY,
};

export async function fetchApi<T>(endpoint: string, params?: Record<string, string>): Promise<T | null> {
  try {
    const url = new URL(`${BASE_URL}${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    const response = await fetch(url.toString(), { headers });
    const data: ApiResponse<T> = await response.json();

    if (data.errors.length > 0) {
      throw new Error(data.errors[0]);
    }

    return data.response;
  } catch (error) {
    toast({
      title: "Erro ao carregar dados",
      description: error instanceof Error ? error.message : "Ocorreu um erro inesperado",
      variant: "destructive",
    });
    return null;
  }
}
