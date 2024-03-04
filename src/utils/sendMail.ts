"use client";

import { env } from "node:process";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const sendCustomEmailSchema = z.object({
  email: z.string().email(),
  message: z.string(),
});

export type emailFormData = z.infer<typeof sendCustomEmailSchema>;

export function sendCustomEmail(data: emailFormData) {
  emailjs.init("EYaRdlg6v8wDhn40d");
  emailjs
    .send("portfolio_service", "portfolio_template", {
      email: data.email,
      message: data.message,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
