import React from 'react';
import classes from './ProductDetails.module.css';
import ProductData from './ProductData' 

const ProductDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr =[classes.ProductImage]
    if(pos === props.currentPreviewImagePos){
      classArr.push(classes.SelectedProductImage);
    }
    return(
      <img key = {pos} className= {classArr.join(' ')} src = {item.imageUrl} alt = {item.styleName} onClick={ () => props.onColorOptionClick(pos)}/>
    );
  })

  const featureList = props.data.featureList.map((item, pos) => {
    
    const classArr =[classes.FeatureItem]

    if(pos === 1 && props.currentSelectedFeature){
      classArr.push(classes.SelectedFeatureItem);
    }
    // if(pos === 1 && props.showHeartBeatSection){
    //   classArr.push(classes.SelectedFeatureItem);
    // } else if(pos === 0 && !props.showHeartBeatSeection){
    //   classArr.push(classes.SelectedFeatureItem);
    // }
    
    return(
      <button onClick= {() => props.onFeatureItemClick(pos)} key = {pos} className= {classArr.join(' ')}>{item}</button>
    );
  })
  
  return(
    <div className={classes.ProductData}>
    
    <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
   
    <p className={classes.ProductDescription}>{ProductData.description}</p>
    
    <h3 className= {classes.SectionHeading}>Select Color</h3>
   
    <div>{colorOptions}</div>
  
  <h3 className= {classes.SectionHeading}>Features</h3>
   
   <div>{featureList}</div>
  
   <button className={classes.PrimaryButton}>Buy Now</button>  

</div>
  )
}
 
export default ProductDetails;