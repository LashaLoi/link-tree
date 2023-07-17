import Image from "next/image";

type TreeLinkProps = {
  name: string;
  href: string;
  image?: string;
};

export function TreeLink({ name, href, image }: TreeLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="bg-gray-100 bg-opacity-70 h-12 p-1 flex justify-between items-center hover:scale-105 active:scale-100 transition-all rounded-md cursor-pointer mb-2"
    >
      <div className="w-10 h-10">
        {image && (
          <Image
            src={image}
            alt={image}
            height={40}
            width={40}
            className="rounded-md"
          />
        )}
      </div>
      <div className="font-semibold">{name}</div>
      <div className="w-10 h-10"></div>
    </a>
  );
}
