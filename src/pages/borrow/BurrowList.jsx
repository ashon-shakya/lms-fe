import React from "react";
import { useSelector } from "react-redux";

const BurrowList = () => {
  const { borrows } = useSelector((store) => store.borrowInfo);

  console.log(12, borrows);
  return (
    <div>
      TABLE BORROW
      {borrows.map((item) => {
        return <div>{item.bookTitle}</div>;
      })}
    </div>
  );
};

export default BurrowList;
