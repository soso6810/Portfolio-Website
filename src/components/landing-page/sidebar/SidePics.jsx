import React from "react"
import hero2 from '../../../assets/hero2.png'
import hero3 from '../../../assets/hero3.png'
import hero4 from '../../../assets/hero4.png'


class SidePic extends React.Component{
  img={hero2,hero3,hero4}
  render(){

  
    
    return(
      <>
        <img src={this.img[`hero${this.props.id}`]} alt=""  className="sidebar__pics"/>
      </>
    )
  }
}

export default SidePic