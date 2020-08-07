import { useRouter } from "next/router";

export default function Person() {
  const router = useRouter();
  return (
    <h2>
      {router.query.person}'s {router.query.vehicule}
    </h2>
  );
}
