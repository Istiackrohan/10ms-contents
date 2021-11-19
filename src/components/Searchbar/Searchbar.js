import React, { useRef } from 'react';
import styled from 'styled-components';
import { IoSearch, IoClose } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from 'react-click-outside-hook';

const SearchBarContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 3.8em;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
    overflow: hidden; 
`;

const SearchInputContainer = styled.div`
    width: 100%;
    min-height: 3.5em;
    display: flex;
    align-item: center;
    position: relative;
    padding: 2px 10px;
`;

const SearchInput = styled.input`
    width: 100%;
    min-height: 100%;
    outline: none;
    border: none;
    font-size: 21px;
    color: #12112e;
    font-weight: 500;
    border-radius: 6px;
    background-color: transparent;

    &:focus{
        outline: none;
        &::placeholder{
            opacity: 0;
        }
    }
    &::placeholder{
        color: #bebebebe;
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
                        ref={inputRef}
                        onFocus={expandContainer}>
                    </SearchInput>
                    <AnimatePresence>
                        {isExpanded && (<CloseIcon key="close-icon" 
                        initial={ {opacity: 0} }
                        animate={ {opacity: 1} }
                        exit={ {opacity: 0} }
                        onClick={collapseContainer}
                        transition={ {duration: 0.2} }
                        >
                            <IoClose />
                        </CloseIcon>
                        )}
                    </AnimatePresence>
                </SearchInputContainer>
            </SearchBarContainer>
        </>
    );
};

export default SearchBar;