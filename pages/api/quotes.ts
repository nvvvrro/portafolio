import { NextApiResponse } from "next";

type Data = {
  content: string;
  author: string;
};

export default function getQuote(res: NextApiResponse<Data>) {
  const url = "https://api.quotable.io/random";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json({ content: data.content, author: data.author });
    });
}
