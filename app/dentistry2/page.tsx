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
import { dentistry2 } from "../list/dentistry2";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Typography variant="h2" gutterBottom>
          DENTISTRY
        </Typography>
        <Typography variant="h6">11.12.23</Typography>
        {dentistry2.map((questionItem: Question, index: number) => (
          <Card
            key={index}
            className="max-w-[600px]"
            style={{
              backgroundColor: "#141414",
              color: "white",
              width: "100%",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <CardHeader className="flex gap-3 pb-3">
              <Typography variant="h6">{`${index + 1}. ${
                questionItem.question
              }`}</Typography>
            </CardHeader>
            <CardBody>
              <FormControl
                component="fieldset"
                style={{ marginBottom: "20px" }}
              >
                <RadioGroup
                  name={`question_${index}`}
                  value={answers[index] || ""}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                >
                  {Object.keys(questionItem.options).map((optionKey) => (
                    <FormControlLabel
                      key={optionKey}
                      value={optionKey}
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": {
                              color: "white",
                            },
                          }}
                        />
                      }
                      label={questionItem.options[optionKey]}
                      style={{
                        color:
                          checked && optionKey === questionItem.correct_answer
                            ? "#90ee90"
                            : "inherit",
                      }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardBody>
          </Card>
        ))}

        <Button variant="contained" onClick={handleCheckAnswers}>
          Finished
        </Button>
      </main>
    </div>
  );
}
