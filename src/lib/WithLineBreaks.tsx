import React from 'react'

export function withLineBreaks(text: string) {
  return (
    <>
      {text.split('\n').map((line, i, arr) => (
        <React.Fragment key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  )
}
