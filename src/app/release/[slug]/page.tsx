/* eslint-disable import/extensions */

import React from "react";

import { aoboshi, average } from "../../fonts";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { releases } from "@/app/releases";

type Props = {};

export async function generateStaticParams() {
  return releases.map(({ slug }) => ({
    slug,
  }));
}

const Page = ({ params }: { params: { slug: string } }) => {
  const currentPageSlug = params.slug;

  // You can replace this with a call to your CMS instead of referring to the releases.tsx file
  const release = releases.find((r) => r.slug === currentPageSlug);

  if (!release) {
    return <div>Not found</div>;
  }

  const { artist, title, blurb, instagram, bandcamp, artistImage } = release;

  return (
    <div className="mt-[25vh] min-h-[55vh] sm:grid grid-cols-2 border-red-500 border-4">
      <div className="flex flex-col gap-8 m-12">
        <div className={`${aoboshi.className} sm:text-8xl text-4xl`}>
          {artist}
        </div>
        <div className={`${average.className} sm:text-4xl text-2xl`}>
          {title}
        </div>
        <div className={`${average.className} text-l`}>{blurb}</div>
        <div className="flex flex-row items-center justify-start gap-4">
          {bandcamp}
          <Link target="_blank" href={instagram!}>
            <FaInstagram size={30} />{" "}
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center bg-red-500">
        <div className="h-[50vh] w-[50vh] relative ">
          <Image
            src={artistImage}
            alt="picture of the artist"
            height={0}
            width={0}
            sizes="40vh"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            quality={100}
            unoptimized={true}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Page;
