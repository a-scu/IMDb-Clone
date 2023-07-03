import React from "react";

const About = () => {
  return (
    <div className="py-6 px-3 ">
      <div className="max-w-5xl bg-dark_gray p-3 mx-auto rounded-[.2rem] flex items-start justify-center gap-3 flex-col">
        <h2 className="text-xl text-imdb font-bold drop-shadow-md">About</h2>
        <p className="font-medium text-white text-sm">
          Hi, my name is Alexis Scuderi. I&apos;m a web developer, and this is
          my Next.js & Tailwind CSS{" "}
          <a
            target="_blank"
            href="https://www.imdb.com/"
            className="font-bold text-imdb"
          >
            IMDb clone
          </a>
          . Initially, it had some extra features like a dark & light theme,
          accounts, and pagination, but I wanted to make this project as simple
          as possible, just as a showcase project, so I removed them.
        </p>
        <p className="font-medium text-white text-sm">
          I consider myself a movie and TV show enthusiast. If it were up to me,
          I would spend my entire day just watching every possible movie or TV
          show that exists. I find it so gratifying to get to know new stories
          and characters, and sometimes you really connect with them, and they
          stay in your life in some way.
        </p>
        <p className="font-medium text-white text-sm">
          So, I wanted to recreate what I think is a nicer-looking home for the
          famous{" "}
          <a
            target="_blank"
            href="https://www.imdb.com/"
            className="font-bold text-imdb"
          >
            IMDb
          </a>{" "}
          page, which contains a large amount of data on every movie and TV show
          that has ever existed. And just that, because realistically, coding an
          IMDb clone with all its features and information would take years. So,
          I hope you enjoyed my little project, and I invite you to connect with
          me on{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alexis-scuderi-1234a7279/"
            className="font-bold text-imdb"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://github.com/a-scu"
            className="font-bold text-imdb"
          >
            GitHub
          </a>
          . See you soon!
        </p>
      </div>
    </div>
  );
};

export default About;
