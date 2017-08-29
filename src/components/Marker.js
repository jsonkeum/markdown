const Marker = (props) => {
  return (
      <div className="row">
       <div className="col-xs-12 col-sm-6 col-md-6">
        <textarea id="textBox" onChange={props.handleChange} defaultValue={props.unmarked}></textarea>
       </div>
       <div className="col-xs-12 col-sm-6 col-md-6" id="translation" dangerouslySetInnerHTML={{ __html:props.markedUp }}>
       </div>
      </div>
    );
}

export default Marker;