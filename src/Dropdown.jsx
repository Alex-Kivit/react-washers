const Dropdown = ({ dropdown }) => {
	return (
        <div className="col mr-2 my-2">
            <h5><strong>{dropdown.label}:</strong></h5>
            <div className="btn-group w-100">
                <a className="btn btn-light btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {dropdown.options[0]}
                </a>
                <ul className="dropdown-menu w-100">
                    {dropdown.options.map((option) => (
                    <li><a className="dropdown-item">{option}</a></li>
                    ))}
                </ul>
            </div>
        </div>
	)
}

export default Dropdown;