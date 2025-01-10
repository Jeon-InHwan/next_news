"use client";

import Link from "next/link";
import styled from "styled-components";
import { wsj_getHeadLines } from "../../api";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const HeadLineWrapper = styled.div`
  background-color: #dcece9;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  max-width: 100%;
  padding: 20px 40px;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1), 0 5px 25px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1), 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

/* 
async function wsj_getHeadLines() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const fetchHeadLines =
    NEXT_API_URL +
    `/everything?domains=wsj.com&apikey=${process.env.NEXT_SECRET_KEY}`;

  console.log(fetchHeadLines);

  return fetch(fetchHeadLines).then((response) => response.json());
}

*/

export default function HomePage() {
  const {
    data: wsjHeadLines,
    isLoading: loadingHeadLines_wsj,
    error,
  } = useQuery({
    queryKey: ["headlines"],
    queryFn: wsj_getHeadLines,
  });

  if (!loadingHeadLines_wsj) {
    console.dir(wsjHeadLines);
  }

  return (
    <>
      <HeadLineWrapper>
        {loadingHeadLines_wsj ? "Loading..." : JSON.stringify(wsjHeadLines)}
      </HeadLineWrapper>
      <HeadLineWrapper>
        {loadingHeadLines_wsj ? "Loading..." : JSON.stringify(wsjHeadLines)}
      </HeadLineWrapper>
    </>
  );
}
