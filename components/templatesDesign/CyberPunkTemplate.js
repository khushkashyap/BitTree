import BaseTemplate from "./BaseTemplate";

export default function CyberPunkTemplate({ user }) {
  return (
    <BaseTemplate
      user={user}
      className="bg-black text-pink-500"
    />
  );
}