"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Heading from "@/components/heading";

const formSchema = z.object({
  title: z.string().min(1),
  objective: z.string().min(1),
  jsStarter: z.string().url(),
  jsSolution: z.string().url(),
  tsStarter: z.string().url(),
  tsSolution: z.string().url(),
  difficulty: z.enum(["easy", "medium", "hard"]),
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
      difficulty: "",
    },
  });

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
            className={`input-bordered ${
              errors.title ? "input-error" : "input-primary"
            } input w-full max-w-md shadow-md`}
          />
          <textarea
            {...register("objective")}
            placeholder="Challenge objective"
            className={`${
              errors.objective ? "textarea-error" : "textarea-primary"
            } textarea h-10 w-full max-w-md shadow-md`}
          />
          <input
            {...register("jsStarter")}
            placeholder="JavaScript starter code (CodeSandbox URL)"
            className={`input-bordered ${
              errors.jsStarter ? "input-error" : "input-primary"
            } input w-full max-w-md shadow-md`}
          />
          <input
            {...register("jsSolution")}
            placeholder="JavaScript solution code (CodeSandbox URL)"
            className={`input-bordered ${
              errors.jsSolution ? "input-error" : "input-primary"
            } input w-full max-w-md shadow-md`}
          />
          <input
            {...register("tsStarter")}
            placeholder="TypeScript starter code (CodeSandbox URL)"
            className={`input-bordered ${
              errors.tsStarter ? "input-error" : "input-primary"
            } input w-full max-w-md shadow-md`}
          />
          <input
            {...register("tsSolution")}
            placeholder="TypeScript solution code (CodeSandbox URL)"
            className={`input-bordered ${
              errors.tsSolution ? "input-error" : "input-primary"
            } input w-full max-w-md shadow-md`}
          />
          <div className="flex items-center gap-1">
            <select
              {...register("difficulty")}
              className={`${
                errors.difficulty ? "select-error" : "select-primary"
              } select w-full max-w-xs`}
            >
              <option disabled selected value="">
                Challenge Difficulty
              </option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
            <div
              className="tooltip tooltip-primary"
              data-tip="This value will be adjusted as needed."
            >
              <button className="h-7 w-7 cursor-default rounded-full bg-primary font-bold text-white shadow-md">
                i
              </button>
            </div>
          </div>
        </div>
        <button className="btn-primary btn-lg btn mx-auto mt-10 block shadow-md">
          Submit
        </button>
      </form>
      <p className="mt-10 text-center text-lg">
        Alternatively, open an issue or PR in our{" "}
        <a
          className="link-primary link"
          href="https://github.com/ogreeni/temp"
          target="_blank"
          rel="noreferrer"
        >
          GitHub repo
        </a>{" "}
        if you spot any room for improvement.
      </p>
    </>
  );
}
