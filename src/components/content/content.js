import React from "react";
import "./content.scss";
import PostSelect from "../postSelect/postSelect";

export function Content({ setPostList }) {
  return (
    <>
      <div className="contentContainer p-3">
        <h1 className="text-4xl font-extrabold dark:text-white">
          The smart solution for a healthy work culture
        </h1>
        <div className="mb-4 mt-4 text-3xl text-gray-900 dark:text-white text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Boost your team's wellbeing with AI-powered health coaching that
          intuitively integrates healthy routines into everyday work.
        </div>
        <PostSelect setPostList={setPostList} />
      </div>
    </>
  );
}
