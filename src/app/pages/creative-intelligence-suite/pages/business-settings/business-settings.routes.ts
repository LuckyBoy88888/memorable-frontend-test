import { lazy } from "react";
import { Route } from "src/app/features/navigation/models/route.model";

const AccountAndBrands = lazy(
  () =>
    import(
      "src/app/pages/creative-intelligence-suite/pages/business-settings/pages/account-and-brands/account-and-brands.page"
    ),
);

const Sectors = lazy(
  () =>
    import(
      "src/app/pages/creative-intelligence-suite/pages/business-settings/pages/sectors/sectors.page"
    ),
);

export const BusinessSettingsRoutes: Route[] = [
  {
    path: "/business-settings/account-and-brands",
    element: AccountAndBrands,
    title: "Account & Brands",
  },
  {
    path: "/business-settings/sectors",
    element: Sectors,
    title: "Sectors",
  },
];
