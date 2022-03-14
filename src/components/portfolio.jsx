import Projects from './projects';
import {projects} from '../files/projects';

const Portfolio = () => {
    return(
        <div className='content m-0'>
            <div className='hero-body columns m-0 pt-6'>
                <div className='container column'>
                    {projects.map((project)=> (
                        <Projects key={project.id} github={project.github} live={project.live} title={project.title}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio