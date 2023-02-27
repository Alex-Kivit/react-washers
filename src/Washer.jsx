import {useState} from 'react';

const Washer = ({ washer }) => {
    const [buttonText, setButtonText] = useState('wybierz');
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setButtonText('WYBRANE');
        setSelected(true)
    };

	return (
        <div className="col-4 my-2 px-2">
            <div className="card p-3">
                <img className="card-img-top" src={washer.imagePath} alt="Product" />
                <div className="card-body">
                    <h5 className="card-title w-75 fw-bold">
                        {washer.number}, {washer.name}, {washer.capacity} kg, {washer.color}
                    </h5>
                    <div className="card-text pt-4">
                        <p className="text-muted my-0">Pojemność (kg): <strong>{washer.capacity}</strong></p>
                        <p className="text-muted my-0">Wymiary (GxSxW): <strong> {washer.dimensions.depth} x {washer.dimensions.width} x {washer.dimensions.height} cm</strong></p>
                        <p className="text-muted my-0">Funkcje: {washer.options.map((option, index) => (
                            <strong>{(index !== 0) ? <>,</> : <></>} {option}</strong>
                            ))}
                        </p>
                        <div class="d-flex align-items-center py-3">
                            <span className="text-muted">Klasa energetyczna</span>
                            <div class="position-relative">
                                <img className="ms-3" src="/energy_class.svg" alt="Energy class" />
                                <text className="energy-class position-absolute start-50">{washer.energyClass}</text>
                            </div>  
                        </div>
                        <h1 className="fw-bold">{washer.price}<sup><span className="fs-5">00</span></sup><sub><span className="fs-5 bottom-0">zł</span></sub></h1>
                        <h5>{washer.loanPrice} x {washer.loanPeriods} rat</h5>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className={selected ? 'btn btn-dark text-uppercase mt-3' : 'btn btn-primary text-uppercase mt-3'}
                        onClick={handleClick}>
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default Washer;