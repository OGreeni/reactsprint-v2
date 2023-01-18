import jsx from "prettier/parser-babel";
import * as prettier from "prettier/standalone";

export const formatCode = (code: string) => {
  const formattedCode = prettier.format(code, {
    parser: "babel",
    plugins: [jsx],
  });

  return formattedCode;
};
