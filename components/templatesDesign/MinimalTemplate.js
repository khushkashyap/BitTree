import BaseTemplate from "./BaseTemplate";

export default function MinimalTemplate({ user }) {
  return (
    <BaseTemplate
      user={user}
      className="bg-white text-black"
    />
  );
}