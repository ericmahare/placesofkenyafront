import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className="error-banner">
      <div className="error-hero">
        <h1 className="display-4 fw-bold">404 Not Found</h1>
        <div className="line"></div>
        <p className="h5">The requested page cannot be found</p>
        <Link to="/" className="btn btn-success mt-3">home page</Link>
      </div>
    </div>
  )
}
export default Error