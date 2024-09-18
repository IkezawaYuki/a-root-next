"use client";
import { Customer } from "@/types/customer";
import { Post } from "@/types/post";
import AdminLayout from "@/components/Layouts/AdminLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Customers from "@/components/Tables/Customers";

const customerData: Customer = {
  id: 1,
  name: "株式会社A",
  email: "a@gmail.com",
  wordpressUrl: "www.a.com",
  instagramName: "a",
  deleteHashFlag: 0,
};

const postData: Post[] = [
  {
    id: 1,
    customerId: 1,
    instagramMediaId: "1",
    instagramLink: "sss",
    wordpressLink: "wordpresslink",
    wordpressMediaId: "aaaaa",
    createdAt: "2024/09/17",
  },
  {
    id: 2,
    customerId: 1,
    instagramMediaId: "1",
    instagramLink: "sss",
    wordpressLink: "wordpresslink",
    wordpressMediaId: "aaaaa",
    createdAt: "2024/09/17",
  },
  {
    id: 3,
    customerId: 1,
    instagramMediaId: "1",
    instagramLink: "sss",
    wordpressLink: "wordpresslink",
    wordpressMediaId: "aaaaa",
    createdAt: "2024/09/17",
  },
];

const CustomerDetail = () => {
  return (
    <AdminLayout>
      <Breadcrumb pageName="顧客詳細" />
      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[50px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                    ID
                  </th>
                  <th className="min-w-[200px] px-4 py-4 font-medium text-black dark:text-white">
                    Instagram Link
                  </th>
                  <th className="min-w-[200px] px-4 py-4 font-medium text-black dark:text-white">
                    Wordpress Link
                  </th>
                  <th className="px-4 py-4 font-medium text-black dark:text-white">
                    実行日時
                  </th>
                </tr>
              </thead>
              <tbody>
                {postData.map((postItem, key) => (
                  <tr key={key}>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {postItem.id}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        <a href={postItem.instagramLink}>
                          {postItem.instagramLink}
                        </a>
                      </p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        <a href={postItem.wordpressLink}>
                          {postItem.wordpressLink}
                        </a>
                      </p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {postItem.createdAt}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CustomerDetail;
