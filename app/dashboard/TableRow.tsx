'use client'
import React, {useState} from 'react';
import StarRating from './StarRating';


export interface TableRow {
    option: string;
    description: string;
    links: string;
    rating: number;
  }

export const rows: TableRow[] = [
    {
      option: "Visit the Australian Museum",
      description: "This is a world-class museum with a wide range of exhibits, from dinosaurs to Aboriginal culture.",
      links: "https://australian.museum/",
      rating: 1,
    },
    {
      option: "Take a walk through the Royal Botanic Garden",
      description: "This is a beautiful garden with a variety of plants and flowers.",
      links: "https://www.rbgsyd.nsw.gov.au/",
      rating: 2,
    },
    {
      option: "Go to the Taronga Zoo",
      description: "This is a great zoo with a wide range of animals from all over the world.",
      links: "https://taronga.org.au/",
      rating: 3,
    },
    {
      option: "Visit the Art Gallery of New South Wales",
      description: "This is a world-class art gallery with a wide range of paintings, sculptures, and other works of art.",
      links: "https://www.artgallery.nsw.gov.au/",
      rating: 4,
    },
    {
      option: "Go for a hike in Sydney Olympic Park",
      description: "This is a great place to get some exercise and enjoy the outdoors.",
      links: "https://www.sydneyolympicpark.com.au/",
      rating: 5,
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


  return (
    <div className=" text-slate-400 lg:text-lg text-sm font-bold">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="text-center font-bold border p-2">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.option} className="border font-normal">
              <td className='px-2 lg:px-2 lg:py-6 w-24 lg:w-64 border'>{row.option}</td>
              <td className='px-2 lg:px-2 lg:py-6 w-48 lg:w-72 border'>{row.description}</td>
              <td className='px-2 lg:px-2 lg:py-6 w-16 lg:w-48 border '>
                <a href={row.links} className="underline break-all">{row.links}</a>
              </td>
              <td className='px-2 lg:px-2 lg:py-6 w-12 lg:w-32 text-center border'>
                <StarRating rating={row.rating} onClick={setIsRevealButtonVisible}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

