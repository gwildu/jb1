import {FunctionComponent} from "react";

/**
 * MyComponent description
 * @param {string} something - Something description
 * @param {string} somethingElse - Something description
 * @returns {JSX.Element}
 * @constructor
 */
export const MyComponent: FunctionComponent<{something: string, somethingElse: string}> = ({something, somethingElse}) => {
    return <div>{something}{somethingElse}</div>;
}