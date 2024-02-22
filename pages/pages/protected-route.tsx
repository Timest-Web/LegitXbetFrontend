import useUser from "@/src/client/shared/Context/UserContext/useUser";

export default function UserProfile() {
  const { user } = useUser();

  if (!user) {
    window.location.href === '/'
  }
  return;
}
