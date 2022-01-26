import { useMemo } from 'react'

type useRegexState = [
  isMatch: boolean,
  matches: RegExpMatchArray | null,
  indexOfFirstMatch: number,
  replace: (replaceValue: string) => string
]

export default function useRegex(regex: RegExp, targetString: string): useRegexState {
  const matches = useMemo(() => targetString.match(regex), [regex, targetString])

  const isMatch = matches !== null

  const indexOfFirstMatch = useMemo(() => (
    targetString.search(regex)
  ), [regex, targetString])

  const replace = (replaceValue: string): string => {
    return useMemo(() => (
      targetString.replace(regex, replaceValue)
    ), [regex, targetString, replaceValue])
  }

  return [
    isMatch,
    matches,
    indexOfFirstMatch,
    replace,
  ]
}