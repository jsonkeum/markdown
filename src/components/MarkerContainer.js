import Marker from "./Marker.js";

export default class MarkerContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      unmarked:"Heading\n==\n\nSub-heading\n--\n \n### Add '#' for additional heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes: *italic*, **bold**, `monospace`, ~~strikethrough~~ .\n\nUnordered list:\n  * Oranges\n  * Apples\n   * Grannysmith (note the extra space)\n\nNumbered list:\n  1. apples\n  2. oranges\n  3. pears\n\n [Link tags](https://www.google.com)",
      markedUp:marked("Heading\n==\n\nSub-heading\n--\n \n### Add '#' for additional heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes: *italic*, **bold**, `monospace`, ~~strikethrough~~ .\n\nUnordered list:\n  * Oranges\n  * Apples\n   * Grannysmith (note the extra space)\n\nNumbered list:\n  1. apples\n  2. oranges\n  3. pears\n\n [Link tags](https://www.google.com)")
  };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(){
    this.setState({markedUp:marked(document.getElementById('textBox').value, {sanitize: true})});
  }
  
  render(){
    return <Marker handleChange={this.handleChange} unmarked={this.state.unmarked} markedUp = {this.state.markedUp} />;
  }
};