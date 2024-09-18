import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Customers from "@/components/Tables/Customers";

import { Metadata } from "next";
import AdminLayout from "@/components/Layouts/AdminLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const TablesPage = () => {
  return (
    <AdminLayout>
      <Breadcrumb pageName="顧客" />
      <div className="mb-4.5 flex flex-wrap gap-2 xl:gap-20">
        <Link
          href="/admin/customers/new"
          className="inline-flex items-center justify-center rounded-full bg-meta-3 px-8 py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          新規登録
        </Link>
      </div>
      <div className="flex flex-col gap-10">
        <Customers />
      </div>
    </AdminLayout>
  );
};

export default TablesPage;
