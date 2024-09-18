"use client";
import { Customer } from "@/types/customer";

const customerData: Customer[] = [
  {
    id: 1,
    name: "株式会社A",
    email: "a@gmail.com",
    wordpressUrl: "www.a.com",
    instagramName: "a",
    deleteHashFlag: 0,
  },
  {
    id: 2,
    name: "B株式会社",
    email: "bb@gmail.com",
    wordpressUrl: "www.bb.com",
    instagramName: "b",
    deleteHashFlag: 0,
  },
  {
    id: 3,
    name: "有限会社C",
    email: "ccc@gmail.com",
    wordpressUrl: "www.ccc.com",
    instagramName: "c",
    deleteHashFlag: 0,
  },
];

const Customers = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[50px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                ID
              </th>
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                顧客名
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                WordpressURL
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                InstagramURL
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                ステータス
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white"></th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customerItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    <a href={"/admin/customers/" + customerItem.id + "/show"}>
                      {customerItem.id}
                    </a>
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {customerItem.name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    <a href={"https://" + customerItem.wordpressUrl}>
                      {customerItem.wordpressUrl}
                    </a>
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black hover:text-blue-800 dark:text-white">
                    <a
                      href={
                        "https://www.instagram.com/" +
                        customerItem.instagramName
                      }
                    >
                      {customerItem.instagramName}
                    </a>
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                      customerItem.instagramId === undefined
                        ? "bg-warning text-warning"
                        : "bg-success text-success"
                    }`}
                  >
                    {customerItem.instagramId === undefined
                      ? "未連携"
                      : "連携済み"}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
