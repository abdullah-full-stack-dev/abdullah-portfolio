import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import '../CSS/NotFound.css'

export const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>404 | Page Not Found - Abdullah Khan</title>

                <meta
                    name="description"
                    content="The page you're looking for doesn't exist. Return to Abdullah Khan's portfolio homepage."
                />

                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <section className="not-found">

                <div>

                    <span className="error-code gradient">404</span>

                    <h1>Page Not Found!</h1>

                    <p>
                        The page you're looking for doesn't exist or may have
                        been moved.
                    </p>

                    <Link to="/" className="back-home">
                        Back to Home
                    </Link>

                </div>

            </section>
        </>
    )
}