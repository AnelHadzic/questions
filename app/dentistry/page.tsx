"use client";
import {
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { questions } from "../list/dentistry";

interface Question {
  question: string;
  options: { [key: string]: string };
  correct_answer: string;
}

export default function Page() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const handleAnswerChange = (questionIndex: number, value: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: value,
    }));
  };

  const handleCheckAnswers = () => {
    setChecked(true);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Typography variant="h2" gutterBottom>
          DENTISTRY
        </Typography>
        <Typography variant="h6">11.12.23</Typography>
        {questions.map((questionItem: Question, index: number) => (
          <FormControl
            component="fieldset"
            key={index}
            style={{ marginBottom: "20px" }}
          >
            <Typography variant="h6">{`${index + 1}. ${
              questionItem.question
            }`}</Typography>
            <RadioGroup
              name={`question_${index}`}
              value={answers[index] || ""}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            >
              {Object.keys(questionItem.options).map((optionKey) => (
                <FormControlLabel
                  key={optionKey}
                  value={optionKey}
                  control={<Radio />}
                  label={questionItem.options[optionKey]}
                  style={{
                    color:
                      checked && optionKey === questionItem.correct_answer
                        ? "green"
                        : "inherit",
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        ))}

        <Button variant="contained" onClick={handleCheckAnswers}>
          Finished
        </Button>
      </main>
    </div>
  );
}
