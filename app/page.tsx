import { get } from "@vercel/edge-config";
import Image from "next/image";

import { TreeLink } from "./components/TreeLink";
import { Media } from "./components/Media";

export type Data = {
  name: string;
  image: string;
  social: {
    name: string;
    href: string;
  }[];
  links: {
    name: string;
    href: string;
    image: string;
  }[];
};

export default async function Home() {
  const data = await get<Data>("data");

  if (!data) throw new Error("No edge config found");

  return (
    <div className="h-screen bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500">
      <div className="flex flex-col items-center text-gray-900 p-4 pt-16">
        <Image
          src="https://pbs.twimg.com/profile_images/1175690553851334656/42ZYSOY3_400x400.jpg"
          alt="AL"
          width={100}
          height={100}
          className="rounded-full"
          priority
        />
        <h1 className="mt-4 font-bold text-white text-xl">Aliaksei Loi</h1>

        <div className="max-w-xl w-full mt-6">
          {data.links.map((item) => (
            <TreeLink key={item.href} {...item} />
          ))}
        </div>

        <Media social={data.social} />
      </div>
    </div>
  );
}
