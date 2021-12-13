import React from "react";
import useSWR from "swr";

interface Props {}

const ExampleBlock: React.FC<Props> = () => {
    const {data, error} = useSWR('planets');

    if (error) return <section>failed to load</section>;
    if (!data) return <section>loading...</section>;

    return (
        <section>
            {data.results.map(({ name }: { name: string }, index: number) =>
                <p key={index}>{name}</p>
            )}
        </section>
    )
}

export default ExampleBlock;
