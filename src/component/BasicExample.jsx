import Accordion from 'react-bootstrap/Accordion';

function BasicExample(props) {
  let myStyle = {
    color:'white',
    backgrondColor:'black',
  }


  return (
     <div>
      <p style={props.mode}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A omnis ea cupiditate rerum ad ipsum unde facere, est doloremque voluptates. Modi beatae eos earum illum sequi possimus non optio reiciendis totam! Voluptatem odit nesciunt perferendis veniam repudiandae nemo eligendi quam corporis cum saepe libero deleniti, quaerat quisquam. Voluptates, repellendus dolores!</p>
      <button onClick={props.update}>dark ebanble</button>
     </div>
  );
}

export default BasicExample;