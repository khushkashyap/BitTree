import BaseTemplate from "./BaseTemplate";

export default function DarkDevTemplate({ user }) {
  return (
    <BaseTemplate
      user={user}
      className="bg-zinc-950 text-white"
    />
  );
}