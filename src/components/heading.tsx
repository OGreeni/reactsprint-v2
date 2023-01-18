import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export default function Heading({ children, className, ...props }: Props) {
  return (
    <h1
      {...props}
      className={`my-4 text-6xl font-bold text-primary ${className}`}
    >
      {children}
    </h1>
  );
}
