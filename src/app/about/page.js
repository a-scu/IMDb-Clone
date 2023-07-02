import React from "react";

const About = () => {
  return (
    <div className="py-6 px-3 ">
      <div className="max-w-5xl bg-dark_gray p-3 mx-auto rounded-[.2rem] flex items-start justify-center gap-3 flex-col">
        <h2 className="text-xl text-imdb font-bold">About</h2>

        <p className="font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className="font-medium">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
        <p className="font-medium">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
    </div>
  );
};

export default About;
