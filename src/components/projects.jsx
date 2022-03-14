

const Projects = ({title, github, live}) => {
    return(
        <div className='card'>
            <header className='card-header'>
                <p className='card-header-title'>
                    {title}
                </p>
                <button class="card-header-icon" aria-label="more options">
                    <span class="icon">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </header>
            {/* <div className='card-image'>
                add image here when readyt
            </div> */}
            <div className='card-content'>
                <a className='content' href={github} target="_blank">Github Link</a>
                <a className='content' href={live} target="_blank">Live Link</a>
            </div>
        </div>
    )
}

export default Projects