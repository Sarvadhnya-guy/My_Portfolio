import './Project.css'

 


function Project(props){




return(

    <div id="cont" className="container">
        <img className="project_image" src= {props.imageurl} alt='no image'/>
        <span className="project_name">{props.project_name}</span>
        <p className="project_paragraph">{props.project_description}</p>
        <ul className='ss'>
            <li><a className='project_links' href="{props.git_url}">Soruce code</a></li>
            <li><a className ='project_links' href="{props.site_url}">Live demo</a></li>
        </ul>
    </div>

)

}

export default Project