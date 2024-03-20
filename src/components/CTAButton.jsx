const CTAButton = ({ className, svg, foxRun, foxStop, linkTo }) => {
  return (
    <a href={linkTo} target='_blank'>
      <button
        type='button'
        data-twe-ripple-init
        data-twe-ripple-color='light'
        className={className}
        onMouseEnter={foxRun}
        onMouseLeave={foxStop}
      >
        <img src={svg} />
      </button>
    </a>
  )
}

export default CTAButton
