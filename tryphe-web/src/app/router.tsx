import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../shared/layout/PublicLayout";
import AppLayout from "../shared/layout/AppLayout";
import LoginPage from "../modules/auth/pages/LoginPage";
import DashboardPage from "../modules/dashboard/pages/DashboardPage";
import { PerfumePage } from "../modules/perfumes/pages/PerfumePage";
import { RecommendationPage } from "../modules/recommendation/pages/RecommendationPage";

import LandingPage from "../modules/marketing/pages/LandingPage";
import PricingPage from "../modules/marketing/pages/PricingPage";
import { MarketingPage } from "../modules/marketing/pages/MarketingPage";
import { OlfactiveFamilyPage } from "../modules/olfactive-families/pages/OlfactiveFamilyPage";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/pricing", element: <PricingPage /> },
      { path: "/login", element: <LoginPage /> }
    ],
  },
  {
    path: "/app",
    element: (
      <AppLayout />
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "perfumes", element: <PerfumePage /> },
      { path: "recommendation", element: <RecommendationPage /> },
      { path: "Marketing", element: <MarketingPage  /> },
      { path: "olfactive-families", element: <OlfactiveFamilyPage  /> }
    ],
  },
]);