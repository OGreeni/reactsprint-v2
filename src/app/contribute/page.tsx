"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Heading from "@/components/heading";

const formSchema = z.object({
  title: z.string(),
  objective: z.string(),
  jsStarter: z.string().url(),
  jsSolution: z.string().url(),
  tsStarter: z.string().url(),
  tsSolution: z.string().url(),
  difficulty: z.string(),
});

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      objective: "",
      jsStarter: "",
      jsSolution: "",
      tsStarter: "",
      tsSolution: "",
      hints: [""],
      categories: [""],
      difficulty: "",
    },
  });

  console.log(errors);

  return (
    <>
      <Heading className="text-center">Contribute to ReactSprint</Heading>
      <p className="text-center text-lg">
        Thank you for your interest in contributing 🎉! Please fill out the form
        below with your challenge details.
      </p>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="mt-10"
      >
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          <input
            {...register("title")}
            placeholder="Challenge title"
            className="input-bordered input-primary input w-full max-w-md shadow-md"
          />
          {errors.title?.message && <p>{errors.title.message.toString()}</p>}
          <textarea
            {...register("objective")}
            placeholder="Challenge objective"
            className="textarea-primary textarea h-10 w-full max-w-md shadow-md"
          />
          <input
            {...register("jsStarter")}
            placeholder="JavaScript starter code (CodeSandbox URL)"
            className="input-bordered input-primary input w-full max-w-md shadow-md"
          />
          <input
            {...register("jsSolution")}
            placeholder="JavaScript solution code (CodeSandbox URL)"
            className="input-bordered input-primary input w-full max-w-md shadow-md"
          />
          <input
            {...register("tsStarter")}
            placeholder="TypeScript starter code (CodeSandbox URL)"
            className="input-bordered input-primary input w-full max-w-md shadow-md"
          />
          <input
            {...register("tsSolution")}
            placeholder="TypeScript solution code (CodeSandbox URL)"
            className="input-bordered input-primary input w-full max-w-md shadow-md"
          />
          <select
            {...register("difficulty")}
            className="select-primary select w-full max-w-xs"
          >
            <option disabled selected value="">
              Challenge Difficulty
            </option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
        <button className="btn-primary btn-lg btn mx-auto mt-10 block shadow-md">
          Submit
        </button>
      </form>
      <p className="mt-10 text-center text-lg">
        Alternatively, open an issue in our{" "}
        <a className="link-primary link">GitHub repo</a> if you spot any room
        for improvement.
      </p>
    </>
  );
}
