"use client";

import { useState } from "react";

import SignUpForm from "@/components/form/SignUpForm";

export default function SignUp() {
  const [fk, setFk] = useState(0);

  return (
    <SignUpForm
      key={fk}
      onReset={() => {
        setFk(fk + 1);
      }}
    />
  );
}
