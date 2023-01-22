import jsx from "prettier/parser-babel";
import * as prettier from "prettier/standalone";

export const formatCode = (code: string) => {
  const formattedCode = prettier.format(code, {
    parser: "babel",
    plugins: [jsx],
  });

  return formattedCode;
};

// function that preserves inline code delimited with backticks
// export const parseCodeString = (code: string) => {
//   const parsedCodeString = code
//     .split(``)
//     .map((substring, index) => {
//       if (index % 2 === 1) {
//         return <code key={index}>{substring}</code>;
//       }
//       return substring;
//     })
//     .join();

//   return parsedCodeString;
// };
