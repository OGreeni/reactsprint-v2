import jsx from "prettier/parser-babel";
import * as prettier from "prettier/standalone";

export const formatCode = (code: string) => {
  const formattedCode = prettier.format(code, {
    parser: "babel",
    plugins: [jsx],
  });

  return formattedCode;
};

// function that splits array based on backticks and adds <code> tags:
// TODO: use this function in the components that render code
export const addCodeTags = (text: string) => {
  const splitText = text.split("`");
  const formattedText = splitText.map((text, index) => {
    if (index % 2 === 0) {
      return text;
    }

    return `<code>${text}</code>`;
  });

  return formattedText.join("");
};
