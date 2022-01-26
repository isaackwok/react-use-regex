declare type useRegexState = [
    isMatch: boolean,
    matches: RegExpMatchArray | null,
    indexOfFirstMatch: number,
    replace: (replaceValue: string) => () => string
];
export default function useRegex(regex: RegExp, targetString: string): useRegexState;
export {};
