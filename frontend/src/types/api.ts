export type Author = {
    name: string;
    avatar: string;
}

export type Message = {
    createdAt: Date;
    id: string;
    author: Author;
    body: string;
}

export type Channel = {
    id: string;
    label: string;
    description?: string;
    messages?: Array<Message>;
}
