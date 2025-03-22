import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home( { searchParams }: {
  searchParams: Promise< { query?: string }>
}) {

  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 1,
      author: { _id: 1, name: "lei guang" },
      _id: 1,
      description: "Amazing post number 1",
      image: "https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png",
      category: "Robots",
      title: "We Robots 1"
    },
    {
      _createdAt: new Date(),
      views: 5,
      author: { _id: 1, name: "lei guang" },
      _id: 2,
      description: "Amazing post number 2",
      image: "https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png",
      category: "Robots",
      title: "We Robots 2"
    },
    {
      _createdAt: new Date(),
      views: 10,
      author: { _id: 1, name: "lei guang" },
      _id: 3,
      description: "Amazing post number 3",
      image: "https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png",
      category: "Robots",
      title: "We Robots 3"
    },
    {
      _createdAt: new Date(),
      views: 7,
      author: { _id: 1, name: "lei guang" },
      _id: 4,
      description: "Amazing post number 4",
      image: "https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png",
      category: "Robots",
      title: "We Robots 4"
    },
    {
      _createdAt: new Date(),
      views: 12,
      author: { _id: 1, name: "lei guang" },
      _id: 5,
      description: "Amazing post number 5",
      image: "https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png",
      category: "Robots",
      title: "We Robots 5"
    },
    {
      _createdAt: new Date(),
      views: 3,
      author: { _id: 1, name: "lei guang" },
      _id: 6,
      description: "Amazing post number 6",
      image: "https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png",
      category: "Robots",
      title: "We Robots 6"
    },
    {
      _createdAt: new Date(),
      views: 8,
      author: { _id: 1, name: "lei guang" },
      _id: 7,
      description: "Amazing post number 7",
      image: "https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png",
      category: "Robots",
      title: "We Robots 7"
    },
    {
      _createdAt: new Date(),
      views: 15,
      author: { _id: 1, name: "lei guang" },
      _id: 8,
      description: "Amazing post number 8",
      image: "https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png",
      category: "Robots",
      title: "We Robots 8"
    },
    {
      _createdAt: new Date(),
      views: 9,
      author: { _id: 1, name: "lei guang" },
      _id: 9,
      description: "Amazing post number 9",
      image: "https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png",
      category: "Robots",
      title: "We Robots 9"
    },
    {
      _createdAt: new Date(),
      views: 20,
      author: { _id: 1, name: "lei guang" },
      _id: 10,
      description: "Amazing post number 10",
      image: "https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png",
      category: "Robots",
      title: "We Robots 10"
    }
  ];
  
  console.log(posts);
  

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
            posts.map((post:StartupCardType, index: number) => (
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
