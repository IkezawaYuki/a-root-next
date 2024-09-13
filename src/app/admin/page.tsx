import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import AdminLayout from "@/components/Layouts/AdminLayout";
import AdminDashboard from "@/components/Dashboard/AdminDashboard";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <AdminLayout>
        <AdminDashboard />
      </AdminLayout>
    </>
  );
}
