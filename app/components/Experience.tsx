export default function Experience() {
    return (
        <section id="experience" className="section">
            <span className="section-name">Experience </span>

            <div className="relative border-l border-gray-700 pl-6 space-y-10 mt-8">
                {/* Open Source #stdlib-js */}
                <div className="relative">
                    <div className="timeline-dot"></div>

                    <h3 className="exp-heading">
                        <a href="https://github.com/stdlib-js/stdlib/issues?q=is%3Apr+is%3Aopen+author%3AShreelaxmiHegde">
                            Contributing to <code>#stdlib-js</code><i className="fa-solid fa-arrow-up-right-from-square ml-1"></i>
                        </a>
                    </h3>
                    <p className="exp-time">Dec 2025 - Present</p>

                    <ul className="exp-details">
                        <li>Documentation improvements of <code>ndarray</code> instances.</li>
                        <li>Fixed <code>Javascript</code> and <code>EditorConfig</code> lint errors.</li>
                    </ul>
                </div>

                {/* Open Source */}
                <div className="relative">
                    <div className="timeline-dot"></div>

                    <h3 className="exp-heading">Open Source Contributor - Hacktoberfest</h3>
                    <p className="exp-time">Oct 2025</p>

                    <ul className="exp-details">
                        <li>Fixed interactive filter bug in a React.js application.</li>
                        <li>Implemented a CSS loader improving UX performance.</li>
                        <li>Enhanced README documentation for better onboarding.</li>
                    </ul>
                </div>

                {/* Fullstack Developer Project */}
                <div className="relative">
                    <div className="timeline-dot"></div>

                    <h3 className="exp-heading">Full-Stack Developer - Accommate (MERN App)</h3>
                    <p className="exp-time">Aug 2025 - November 2025</p>

                    <ul className="exp-details">
                        <li>Built complete eCommerce platform with Auth & backend APIs.</li>
                        <li>Implemented CRUD operations on Listings and reviews.</li>
                        <li>Integrated Cloudinary for product media uploads.</li>
                        <li>Deployed frontend on Vercel & backend on Render.</li>
                    </ul>
                </div>

                {/* Chrome Extension */}
                <div className="relative">
                    <div className="timeline-dot"></div>

                    <h3 className="exp-heading">Chrome Extension Development</h3>
                    <p className="exp-time">July 2025</p>

                    <ul className="exp-details">
                        <li>Built a productivity extension using JavaScript + Manifest V3.</li>
                        <li>The extension can hold upto 10 copy histories.</li>
                        <li>Make smoother workflow for retrieving the copies.</li>
                        <li>Code fully available on GitHub (not published due to fees).</li>
                    </ul>
                </div>
            </div>

        </section>

    )
}