import { useFindCountryLazyQuery } from "@/types/graphql";
import { useRouter } from "next/router";
import { useEffect } from "react";
function Country() {
  const router = useRouter();
  const [findCountry, { data, loading }] = useFindCountryLazyQuery({
    fetchPolicy: "no-cache",
  });
  useEffect(() => {
    if (router.isReady) {
      findCountry({
        variables: { code: router.query.code as string },
      });
    }
  }, [router.isReady]);

  if (loading) {
    return <div>Chargement en cours</div>;
  }
  return (
    <div>
      <h1>{data?.country.name}</h1>
      {data?.country ? (
        <>

        </>
      ) : (
        <div>No country for {router.query.code} country code</div>
      )}
    </div>
  );
}

export default Country;
