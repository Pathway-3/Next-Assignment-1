import Image from "next/image";
import Header from "./componets/Header";
import listOfNames from "./componets/list of name";
import ListPrompt from "inquirer/lib/prompts/list";

listOfNames;
export default function Home() {
  return (
    <main>
      <Header />
      <listOfNames />
    </main>
  );
}
