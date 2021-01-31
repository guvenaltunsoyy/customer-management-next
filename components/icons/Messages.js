import * as React from 'react'

function SvgMessages(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M467 76H45a45 45 0 00-45 45v270a45 45 0 0045 45h422a45 45 0 0045-45V121a45 45 0 00-45-45zm-6.3 30L287.8 278a44.7 44.7 0 01-63.6 0L51.3 106h409.4zM30 384.9V127l129.6 129L30 384.9zM51.3 406L181 277.2l22 22c14.2 14.1 33 22 53.1 22 20 0 38.9-7.9 53-22l22-22L460.8 406H51.3zM482 384.9L352.4 256 482 127v258z" />
    </svg>
  )
}

export default SvgMessages
