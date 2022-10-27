// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type Message = {
  message: string
}

let foundLeaders: number[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LeaderData | Message>
) {
  const leadersData = [
    {
      id:0,
      name: "Community Leads",
      username: "communityleads",
    },
    {
      id:1,
      name: "Marvis Ighedosa",
      username: "marvisIghedosa",
    },
    {
      id:2,
      name: "Timothy Ovie",
      username: "Timothy_Ovie",
    },
    {
      id:3,
      name: "Bella Mfonobong",
     username: "bella_mfonobong",
    },
  ];

  function generateRandomUniqueId(totalLeaders: number): any {
    //Generate random number
  const leaderId = Math.floor(Math.random() * totalLeaders);
    if(!foundLeaders.includes(leaderId)) {
      foundLeaders.push(leaderId);
      const communityLeader = leadersData.find((value) => value.id === leaderId)

      if (communityLeader) {
        res.status(200).json(communityLeader)
      } else {
        res.status(404).json({message: "No Leader Found"})
      }
        // return leaderId;
    } else {
        if(foundLeaders.length < totalLeaders) {
          //Recursively generate number
         return  generateRandomUniqueId(totalLeaders);
        } else {
          res.status(404).json({message: "All leaders have been guessed"})
          return false;
        }
    }
}
  generateRandomUniqueId(leadersData.length)
}
