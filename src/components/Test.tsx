import { ReactNode } from "react";

type TestProps = {
    render: (quantity?: number, isNew?: boolean) => ReactNode
}

export const Test = ({ render }:TestProps) => {
    return (
        <div>
            {render(10, true)}
        </div>
    );
}