import './Experience.css'
import Project from './Project'
import image from './assets/project_image.png'




function Experience() {



    return (

        <main className='main_experience' id='experience'>

            <span className='experience'>EXPERIENCE</span><br />
            <span className='project'><span className='p'>&</span> PROJECTS</span>
           
            <p className='experience_p'>-&gt; Currently persuing my B.tech degree in Engineering Physics form Indian Instititue of Techonlogy Dharwad <br />-&gt; Proficent in JavaScript, HTML, CSS and React</p>
            
            <span className="project_head">MY PROJECTS:</span>
            
            <div className="project_container">
                <Project project_name="My Portfolio" project_description="This website for shocasing myself and my work" imageurl={image}></Project>
            </div>



        </main>

    )

}

export default Experience