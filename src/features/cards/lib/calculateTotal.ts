import type { ServiceTypes } from "../types/servicesTypes";

interface WebOptions {
  pages: number;
  languages: number;
}

export function calculateTotal(
  selectedIds: number[],
  services: ServiceTypes[],
  webOptions?: WebOptions
): number {
  return selectedIds.reduce((total, id) => {
    const service = services.find((s) => s.id === id);
    if (!service) return total;

    const isWeb = service.title.includes("Web");

    if (isWeb && webOptions) {
      const extraPages = Math.max(0, webOptions.pages - 1);
      const extraLanguages = Math.max(0, webOptions.languages - 1);
      const extras = extraPages * 30 + extraLanguages * 20;
      return total + service.price + extras;
    }

    return total + service.price;
  }, 0);
}
