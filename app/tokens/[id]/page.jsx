import TokenDetail from "@/components/tokens/TokenDetail";

export default async function TokensPage(ref) {
  const { params, searchParams } = ref;
  return (
    <>
      <TokenDetail id={params?.id} />
    </>
  );
}
