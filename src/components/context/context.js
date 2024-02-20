import React from "react";
import "./context.scss";

export function Context({ postList }) {
  return (
    <>
      <div className="contextContainer p-3">
        <div className="mb-4 mt-4 text-gray-900 dark:text-white text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          User Posts Count:
        </div>
        <ul>
          {Object.entries(postList).map(([userId, count]) => (
            <li key={userId}>
              <span className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                userId {userId}
              </span>
              : {count} posts
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
