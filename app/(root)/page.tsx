import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home( { searchParams }: {
  searchParams: Promise< { query?: string }>
}) {

  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY)
  

  // const posts = [{
  //   _createdAt: new Date(),
  //   views: 1,
  //   author: {_id: 1, name: "lei guang"},
  //   _id: 1,
  //   description: "Amazing",
  //   image: "https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png",
  //   category: "Robots",
  //   title: "We Robots"
  // }]

  return (
    <>
        <section className="pink_container pattern">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

      <SearchForm query = {query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          { query? `Search results for "${query}"` : "All Startups" }
        </p>

        <ul className="mt-7 card_grid">
          { posts?.length > 0 ? (
            posts.map((post:StartupTypeCard, index: number) => (
              <StartupCard key={ post?._id} post={post} />
            ))
          ): (
            <p className="no-results">No startups found</p>
          )
           
          }

        </ul>

      </section>


    </>
  );
}
