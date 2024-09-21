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

export default function Page() {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  // Handle answer selection
  const handleAnswerChange = (questionIndex, value) => {
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
        <Typography variant="h1" gutterBottom>
          DENTISTRY
        </Typography>

        {questions.map((questionItem, index) => (
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
                      checked && optionKey !== questionItem.correct_answer
                        ? "red"
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
