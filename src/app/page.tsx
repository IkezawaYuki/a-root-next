import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import Layout from "@/components/Layouts/Layout";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <Layout>
        <ECommerce />
      </Layout>
    </>
  );
}
