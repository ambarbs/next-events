"use client";
import React, { useState } from "react";
import StarRating from "./StarRating";
import "./tableRow.css";
import FlipAnimation from "./FlipAnimation";
import ElevatedCard from "./ElevatedCard";
import Bondi from "./images/bondi_coogee.jpg";
import Image from "next/image";

export interface TableRow {
  option: string;
  description: string;
  links: { url: string; label: string }[];
  myRating: number;
  image: string;
}

export const rows: TableRow[] = [
  {
    option: "Bondi to Coogee coastal walk",
    description:
      "Enjoy a scenic coastal walk from Bondi Beach to Coogee Beach, passing by several other beaches and parks along the way.",
    links: [
      {
        url: "https://www.sydney.com/destinations/sydney/sydney-east/bondi/attractions/bondi-coogee-coastal-walk",
        label: "Bondi to Coogee",
      },
    ],
    myRating: 5,
    image: "/bondi_coogee.jpg",
  },
  {
    option: "Explore Manly",
    description:
      "Visit Manly beach for a walk, exploring delicious restaurants and bars, and a relaxed atmosphere",
    links: [
      {
        url: "https://www.sydney.com/destinations/sydney/sydney-north/manly",
        label: "Manly",
      },
    ],
    myRating: 4,
    image: "/manly.jpg",
  },
  {
    option: "Dymocks",
    description:
      "Book lover's paradise. Happy to grab a coffee and see what you read.",
    links: [
      {
        url: "https://www.sydney.com/destinations/sydney/sydney-city/city-centre/attractions/the-dymocks-building",
        label: "Dymocks building",
      },
    ],
    myRating: 0,
    image: "/dymocks.jpg",
  },
  {
    option: "Munich Brauhaus, The Rocks and Opera Bar",
    description:
      "Vist the German brwery in The Rocks and later have adrink at the Opera Bar and enjoy the stunning views",
    links: [
      { url: "https://www.munichbrauhaus.com.au/", label: "Munich Brauhaus" },
      {
        url: "https://www.sydneyoperahouse.com/visit/eat-and-drink/opera-bar",
        label: "Opera Bar",
      },
    ],
    myRating: 4,
    image: "/munich.jpg",
  },
  {
    option: "Cooks River Walk",
    description:
      "Relaxed walk beside the Cooks river. The path is popular for walking, running and cycling.",
    links: [
      {
        url: "https://www.sydneycyclepaths.com.au/project/the-cooks-river-cycle-way-a-sydney-classic/",
        label: "Cook's River",
      },
    ],
    myRating: 4,
    image: "/cooks.jpg",
  },
  {
    option: "Art and Culture Hop",
    description:
      "Explore Sydney's vibrant arts and culture scene with a visit to three world-class museums.",
    links: [
      {
        url: "https://www.artgallery.nsw.gov.au/",
        label: "Museum 1",
      },
      {label: 'Museum 2', url: 'https://australian.museum/' },
      {label: 'Museum 3', url: 'https://www.sydney.com/destinations/sydney/sydney-city/the-rocks/attractions/museum-contemporary-art-australia-mca' },
    ],
    myRating: 0,
    image: "/museum.jpg",
  },
];

interface TableProps {
  rows: TableRow[];
}

const Table: React.FC<TableProps> = ({ rows }) => {
  const columns = [
    {
      header: "Option",
      key: "option",
    },
    {
      header: "Description",
      key: "description",
    },
    {
      header: "Links",
      key: "links",
    },
    {
      header: "Rate it",
      key: "rating",
    },
  ];

  const [showRevealButton, setShowRevealButton] = useState(false);

  const setIsRevealButtonVisible = () => setShowRevealButton(true);

  const [flip, setFlip] = useState(Array(rows.length).fill(false));

  const handleFlip = (index: number) => {
    setFlip(
      flip.map((item, i) => {
        if (index === i) {
          return !flip[i];
        }
        return flip[i];
      })
    );
  };
  return (
    <div className=" text-slate-400 lg:text-lg text-sm font-bold">
      <table className="w-screen mt-4">
        <tbody>
          {rows.map((row, index) => {
            // eslint-disable-next-line react/jsx-key
            return (
              // eslint-disable-next-line react/jsx-key
              <tr
                key={row.option}
                className={
                  flip[index] ? "border font-normal elevated-card-tr" : ""
                }
              >
                <td>
                  <FlipAnimation
                    frontContent={
                      <div onClick={() => handleFlip(index)}>
                        <ElevatedCard
                          imageUrl={row.image}
                          description={row.option}
                        />
                      </div>
                    }
                    flippedContent={
                      <div
                        className="border font-normal "
                        onClick={(e) => e.stopPropagation()}
                      >
                        <td className="px-2 lg:px-2 lg:py-6 w-1/5 lg:w-64 border">
                          {row.option}
                        </td>
                        <td className="px-2 lg:px-2 lg:py-6 w-2/5 lg:w-72 border">
                          {row.description}
                        </td>
                        <td className="px-2 lg:px-2 lg:py-6 w-1/10 lg:w-48 border ">
                          {row.links.map( link => <a
                            key={link.label}
                            href={link.url}
                            className="underline break-all"
                            target="_blank"
                          >
                            {link.label}
                          </a>)}
                        </td>
                        <td className="px-2 lg:px-2 lg:py-6 w-1/5 lg:w-32 text-center border">
                          <StarRating
                            myRating={row.myRating}
                            onClick={setIsRevealButtonVisible}
                          />
                        </td>
                      </div>
                    }
                    isFlipped={flip[index]}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
