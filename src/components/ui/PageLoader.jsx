import PropTypes from 'prop-types'

const PageLoader = ({ label = 'Composing your course...' }) => {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center text-white/70">
      <span className="sr-only">Loading</span>
      <div className="h-14 w-14 animate-spin rounded-full border border-white/10 border-t-gold-200"></div>
      <p className="text-xs uppercase tracking-[0.4em] text-white/50">{label}</p>
    </div>
  )
}

PageLoader.propTypes = {
  label: PropTypes.string,
}

export default PageLoader
