"use client";
import React, { createElement, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    });
  };

  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
          />
        </div>
        <Button
          type="submit"
          onClick={() => alert("メールが送信されました。")}
          className="w-full"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
