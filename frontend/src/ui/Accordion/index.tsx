import React, { ReactNode, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { DefaultStyledComponentProps } from "../../themes";

type AccordionOptionProps = {
  title: ReactNode;
  children: ReactNode;
  notifications?: number;
};

const AccordionOption: React.FunctionComponent<AccordionOptionProps> = ({
  title,
  children,
  notifications,
}: AccordionOptionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <OptionContainer>
      <OptionTitle onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>
          {notifications}
          <StyledChevron isOpen={isOpen} />
        </span>
      </OptionTitle>
      <OptionContent isOpen={isOpen}>{children}</OptionContent>
    </OptionContainer>
  );
};

const OptionContainer = styled.div<DefaultStyledComponentProps>`
  padding: ${({ theme }) => theme.spacing[0]}px;
`;

const OptionTitle = styled.div<DefaultStyledComponentProps>`
  cursor: pointer;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledChevron = styled(FaChevronRight)<
  DefaultStyledComponentProps & { isOpen: boolean }
>`
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  transform: rotate(${({ isOpen }) => (isOpen ? "90deg" : "0deg")});
  transition: transform 0.5s;
`;

const OptionContent = styled.div<
  DefaultStyledComponentProps & { isOpen: boolean }
>`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "auto" : "0px")};
`;

export type Props = {
  children: ({ Option }: { Option: typeof AccordionOption }) => ReactNode;
};

const Accordion: React.FC<Props> = ({ children }: Props) => (
  <div>{children({ Option: AccordionOption })}</div>
);

export default Accordion;
