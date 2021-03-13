import React from 'react';

export type Props = {
    children?: string | string[];
    unreadMessages?: number;
}

const ChannelLabel: React.FC<Props> = (props: Props) => (
    <p>placeholder</p>
);

export default ChannelLabel;
