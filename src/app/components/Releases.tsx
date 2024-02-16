/* eslint-disable arrow-body-style */
import React from "react";
import Image from "next/image";
import { aoboshi, average } from "../fonts";
import Link from "next/link";
import isOdd from "is-odd";
import { releases } from "../releases";

type Props = {};

const Releases = (props: Props) => {
  const renderReleases = releases.map((release) => {
    return (
      <div key={release.id} className="sm:grid grid-cols-2">
        <div
          className={`sm:h-[50vw] h-[100vw]  bg-red-500 flex flex-col justify-center ${
            isOdd(release.id) ? "sm:col-start-2" : ""
          }`}
        >
          <Link href={`/release/${release.slug}`}>
            <div
              className={`${aoboshi.className} text-white text-center text-4xl mb-4 cursor-pointer`}
            >
              {release.artist}
            </div>
          </Link>
          <Link href={`/release/${release.slug}`}>
            <div
              className={`${average.className} text-white text-center text-4xl`}
            >
              {release.title}
            </div>
          </Link>
        </div>
        <div
          className={` sm:h-[50vw]  h-[100vw] inner-border border-red-500 border-4  bg-white flex items-center justify-center  ${
            isOdd(release.id) ? `sm:col-start-1 sm:row-start-1` : ""
          } `}
        >
          <Link href={`/release/${release.slug}`}>
            <Image
              src={release.cover}
              alt="Heading south EP cover art"
              width={800}
              height={800}
              style={{ width: "40vw", height: "40vw" }}
              quality={100}
            ></Image>
          </Link>
        </div>
      </div>
    );
  });

  return <ul className="flex flex-col mt-[25vh]">{renderReleases}</ul>;
};

export default Releases;
