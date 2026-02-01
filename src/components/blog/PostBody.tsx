import parse from 'html-react-parser';

interface Props {
    content: string;
}

export default function PostBody({ content }: Props) {
    return (
        <div className="mx-auto max-w-3xl prose prose-lg dark:prose-invert">
            {parse(content)}
        </div>
    );
}
