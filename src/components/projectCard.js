import {Col} from "react-bootstrap";
function ProjectCard({title,description,imgURL,url}) {
    return ( 
        <Col sm={6} md={4}>
            
            <div className="proj-imgbx">
                <a href={url} target="_blank"  rel="noreferrer">
                    <img src={imgURL} alt="error"/>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </a>
            </div>
            
        </Col>
    );
}

export default ProjectCard;