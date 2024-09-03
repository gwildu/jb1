import {FunctionComponent} from "react";

/**
 * MyComponent description
 * @param {string} something - Something description
 * @returns {JSX.Element}
 * @constructor
 */
export const MyComponent: FunctionComponent<{something: string}> = ({something}) => {
    return <div>{something}</div>;
}