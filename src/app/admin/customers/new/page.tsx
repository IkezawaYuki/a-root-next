"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import AdminLayout from "@/components/Layouts/AdminLayout";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";

const CustomerNew = () => {
  return (
    <AdminLayout>
      <Breadcrumb pageName="顧客新規登録" />
      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <form
              action="http://localhost:1323/api/v1/admin/customers"
              method="POST"
            >
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    顧客名
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    Emailアドレス
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    Wordpress URL
                  </label>
                  <input
                    type="text"
                    name="wordpressUrl"
                    placeholder="Wordpress URL"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    パスワード
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <SelectGroupTwo />
                <button
                  type="submit"
                  className="my-3 rounded-lg bg-primary px-4 py-2 text-white hover:opacity-80"
                >
                  登録
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CustomerNew;
