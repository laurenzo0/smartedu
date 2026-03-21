import "./SubjectCard.css";

function SubjectCard({image,title,color}){
  return(
    <div className="subject-card">

      <img src={image} alt={title}/>

      <h4 style={{color:color}}>
        {title}
      </h4>

    </div>
  )
}

export default SubjectCard;