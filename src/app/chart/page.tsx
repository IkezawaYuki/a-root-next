import Chart from "@/components/Charts/page";
import { Metadata } from "next";
import defaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Chart | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const BasicChartPage: React.FC = () => {
  return (
    <defaultLayout>
      <Chart />
    </defaultLayout>
  );
};

export default BasicChartPage;
