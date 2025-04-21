import { Welcome } from "./welcome";

export function meta({ }) {
  return [
    { title: "David Saldubehere" },
    { name: "description", content: "I am a Schreyer Scholar at Penn State majoring in computer science and mathematics" },
  ];
}

export default function Home() {
  return <Welcome />;
}
