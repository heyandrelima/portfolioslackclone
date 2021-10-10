import styled from "styled-components";
import { DefaultStyledComponentProps } from "../../themes";
import { Channel } from "../../types/api";

type Props = {
  channelInfo: Channel;
};

const ChannelInfo = ({ channelInfo: { label, description } }: Props) => (
  <Container data-test-id="channel-info">
    <Label>#{label}</Label>
    {description && <Description>{description}</Description>}
  </Container>
);

const Container = styled.div`
  background: #fff;
  width: 100$;
  border-bottom: 1px solid #ccc;
  padding: 0.6em;
`;

const Label = styled.h2<DefaultStyledComponentProps>`
  font-family: ${(props: DefaultStyledComponentProps) =>
    props.theme.fontFamily};
  color: ${(props: DefaultStyledComponentProps) => props.theme.fontColorDarker};
  font-size: 1.2em;
  font-weight: bold;
  margin: 0.4em 0;
  cursor: pointer;
`;

const Description = styled.p`
  font-family: ${(props: DefaultStyledComponentProps) =>
    props.theme.fontFamily};
  color: ${(props: DefaultStyledComponentProps) => props.theme.fontColorDark};
  font-size: 0.9em;
  margin: 0 0 0.4em;
`;

export default ChannelInfo;
