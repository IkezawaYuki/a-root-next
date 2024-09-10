export default async function Page() {
  const apiUrl = process.env.POPPLE_APP_API_URL;

  let data = await fetch(String(apiUrl));
  console.log(data);
  console.log(data.body);
  return <p>管理者ページ{data.status}</p>;
}
