import React, { useRef } from 'react';
import styled from 'styled-components';
import { IoSearch, IoClose } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from 'react-click-outside-hook';
import MoonLoader from "react-spinners/MoonLoader";

const SearchBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 3.8em;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
`;

const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 21px;
  color: #12112e;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

const SearchIcon = styled.span`
    color: #bebebe;
    font-size: 30px;
    margin-right: 10px;
    margin-top: 12.5px;
    vertical-align: middle;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover{
        color: #dfdfdf;
    }
`;

const CloseIcon = styled(motion.span)`
    color: #bebebe;
    font-size: 30px;
    margin-right: 20px;
    margin-top: 12.5px;
    vertical-align: middle;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover{
        color: #dfdfdf;
    }
`;

const LineSeperator = styled.span`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #d8d8d878;
`;

const SearchUser = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1em;
    overflow-y: auto;

    &:hover{
        color: #dfdfdf;
    }
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const containerVariants = {
    expanded: {
        height: "20em",
    },
    collapsed: {
        height: "3.8em",
    }
}

const containerTransition = { type: 'spring', damping: 22, stiffness: 150 }

const SearchBar = (props) => {
    const [isExpanded, setExpanded] = useState(false);
    const [parenRef, isClickedOutside] = useClickOutside();
    const inputRef = useRef();
    const [searchQuery, setSearchQuery] = useState(null);

    const changeHandler = (e) =>{
        e.preventDefault();
        setSearchQuery(e.target.value);
    }

    const expandContainer = () => {
        setExpanded(true);
    }

    const collapseContainer = () => {
        setExpanded(false);
        if (inputRef.current)
            inputRef.current.value = "";
    };

    useEffect(() => {
        if (isClickedOutside) collapseContainer();
    }, [isClickedOutside]);

    const searchUser = () => {

    }

    return (
        <>
            <SearchBarContainer
                animate={isExpanded ? "expanded" : "collapsed"}
                transition={containerTransition}
                variants={containerVariants}
                ref={parenRef}>
                <SearchInputContainer>
                    <SearchIcon>
                        <IoSearch />
                    </SearchIcon>
                    <SearchInput
                        placeholder="Search user"
                        onFocus={expandContainer}
                        ref={inputRef}
                        value= {searchQuery}
                        onChange= {changeHandler}
                    />
                    <AnimatePresence>
                        {isExpanded && (<CloseIcon key="close-icon"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={collapseContainer}
                            transition={{ duration: 0.2 }}
                        >
                            <IoClose />
                        </CloseIcon>
                        )}
                    </AnimatePresence>
                </SearchInputContainer>
                <LineSeperator />
                <SearchUser>
                    <LoadingWrapper>
                        <MoonLoader loading color="#000" size={20} />
                    </LoadingWrapper>
                </SearchUser>
            </SearchBarContainer>
        </>
    );
};

export default SearchBar;