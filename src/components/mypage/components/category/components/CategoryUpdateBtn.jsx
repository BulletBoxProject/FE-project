import React, { useState } from "react";
import styled from "styled-components";
import CategoryUpdateModal from "./CategoryUpdateModal";

const CategoryUpdateBtn = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
    console.log(props);
  };
  return (
    <>
      <CategoryBtn
        id={props.id}
        backgroundColor={props.backgroundColor}
        onClick={() => {
          onClickButton();
        }}
      >
        {props.children}
      </CategoryBtn>
      {isOpen && (
        <CategoryUpdateModal
          id={props.id}
          backgroundColor={props.backgroundColor}
          name={props.children}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
};

export default CategoryUpdateBtn;

const CategoryBtn = styled.button`
  width: 34.5vw;
  height: 6.5vh;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor || "white"};
  /* {background-color= white ? box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2): null} */
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
`;
