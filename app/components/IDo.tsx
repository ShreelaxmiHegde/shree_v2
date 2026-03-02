export default function IDo() {
    return (
        <section id="ido" className="section">
            <span className="section-name">What I Can Do</span>

            <div className="flex flex-wrap gap-4 mt-8">
                <div className="card w-xs max-w-md">
                    <span className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0379fc] to-[#22ffd7]">Build</span>
                    <ul>
                        <li>- Node.js APIs</li>
                        <li>- Authentication systems</li>
                        <li>- REST architecture</li>
                        <li>- Database design (indexing, schema decisions)</li>
                    </ul>
                </div>
                <div className="card w-xs max-w-md">
                    <span className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0379fc] to-[#22ffd7]">Ship</span>
                    <ul>
                        <li>- Dockerized frontend & backend</li>
                        <li>- GitHub Actions CI pipelines</li>
                        <li>- Automated builds & image pushes</li>
                        <li>- Cloud deployments (EC2, Render, etc.)</li>
                    </ul>
                </div>
                <div className="card w-xs max-w-md">
                    <span className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#0379fc] to-[#22ffd7]">Think Systems</span>
                    <ul>
                        <li>- Environment separation</li>
                        <li>- Secret management</li>
                        <li>- Error handling patterns</li>
                        <li>- Production considerations</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}