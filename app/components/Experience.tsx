export default function Experience() {
    return (
        <section id="experience" className="section">
            <span className="section-name">Experience </span>

            <div className="relative border-l border-gray-700 pl-6 space-y-10 mt-8">
                {/* Fullstack Developer Project */}
                <div className="relative">
                    <div className="timeline-dot"></div>

                    <h3 className="exp-heading">Full-Stack Development - Accommate (MERN App) <a href="https://accommate.vercel.app">
                    <i className="fa-solid fa-arrow-up-right-from-square ml-1"></i></a></h3>
                    <p className="exp-time">MERN · Docker · CICD</p>

                    <ul className="exp-details">
                        <li>Built complete eCommerce platform with Auth & backend APIs.</li>
                        <li>Implemented CRUD operations on Listings and reviews.</li>
                        <li>Integrated Cloudinary for product media uploads.</li>
                        <li>Deployed frontend on Vercel & backend on Render.</li>
                        <li>Implemented centralized Error Handling pipeline (frontend - backend)</li>
                        <li>Added Component and API testing</li>
                        <li>Containerized application with dev and prod environment separation</li>
                        <li>Built CI pipelines on specific event triggers (on PR creation & main branch)</li>
                    </ul>
                </div>

                <div className="relative">
                    <div className="timeline-dot"></div>

                    <h3 className="exp-heading">CLI tool Development - siya CLI <a href="https://github.com/ShreelaxmiHegde/siya-cli">
                    <i className="fa-solid fa-arrow-up-right-from-square ml-1"></i></a>
                    </h3>
                    <p className="exp-time">Node.js</p>

                    <ul className="exp-details">
                        <li>Built custom version control system</li>
                        <li>Supports commands like <code>init, add, commit, revert, pull and push</code></li>
                        <li>Used AWS S3 bucket to save repository & perform <code>pull/push</code> operations</li>
                    </ul>
                </div>

                {/* Open Source */}
                <div className="relative">
                    <div className="timeline-dot"></div>

                    <h3 className="exp-heading">Open Source Contributions</h3>
                    <p className="exp-time">Javascript</p>

                    <ul className="exp-details">
                        <li><b><code>#stdlib-js</code> (Scintific Computing Library for JavaScript)</b> <a href="https://github.com/stdlib-js/stdlib/issues?q=is%3Apr+is%3Aopen+author%3AShreelaxmiHegde">
                            <i className="fa-solid fa-arrow-up-right-from-square ml-1"></i>
                        </a></li>
                        <ul>
                            <li>- Documentation improvements of <code>ndarray</code> instances.</li>
                            <li>- Fixed <code>Javascript</code> and <code>EditorConfig</code> lint errors.</li>
                        </ul>
                        <li><b><code>#aws/aws-sdk-js-v3</code></b> <a href="https://github.com/aws/aws-sdk-js-v3/issues?q=is%3Aissue%20state%3Aopen%20author%3AShreelaxmiHegde">
                            <i className="fa-solid fa-arrow-up-right-from-square ml-1"></i>
                        </a></li>
                        <ul>
                            <li>- Opened issue on UI misalignment (which now added to docs improvement backlog)</li>
                        </ul>
                        <li><b>Hactoberfest 2025:</b></li>
                        <ul>
                            <li>- Fixed interactive filter bug in a React.js application.</li>
                            <li>- Implemented a CSS loader improving UX performance.</li>
                            <li>- Enhanced README documentation for better onboarding.</li>
                        </ul>
                    </ul>
                </div>

                {/* Chrome Extension */}
                <div className="relative">
                    <div className="timeline-dot"></div>

                    <h3 className="exp-heading">Chrome Extension Development <a href="https://github.com/ShreelaxmiHegde/Clipboard-manager">
                            <i className="fa-solid fa-arrow-up-right-from-square ml-1"></i>
                        </a></h3>
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