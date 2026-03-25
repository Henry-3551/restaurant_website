import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const NotFoundPage = () => {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-xs uppercase tracking-[0.5em] text-white/50">404</p>
      <h1 className="text-4xl font-semibold text-white">We saved your table, but not this page.</h1>
      <p className="text-white/60">
        The link you followed is no longer part of the tasting experience. Choose another course below.
      </p>
      <Button as={Link} to="/" variant="secondary">
        Back to home
      </Button>
    </section>
  )
}

export default NotFoundPage
