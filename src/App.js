import classes from './App.module.css';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar';
import React, {Component } from 'react';
import ProductData from './ProductData';

class App extends Component{ 

  state = {
    ProductData: ProductData,
    currentPreviewImagePos: 0,
    currrentSelectedFeature: 0,
  }

   onColorOptionClick = (pos)=> {
       this.setState({currentPreviewImagePos: pos})
  }

  onFeatureItemClick = (pos) => {
    this.setState({currrentSelectedFeature : pos});
  }
  render(){
    return (
      <div className="App">
      <Topbar/>
     
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
        <ProductPreview currentPreviewImage={this.state.ProductData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
           currrentSelectedFeature={this.state.currrentSelectedFeature}/>
        </div>
        
        <div className={classes.ProductData}>
         <ProductDetails data = {this.state.ProductData} onColorOptionClick={this.onColorOptionClick}  currentPreviewImagePos = {this.state.currentPreviewImagePos}
         onFeatureItemClick = {this.onFeatureItemClick} currrentSelectedFeature = {this.state.currrentSelectedFeature}/>  
      </div>
    
      </div>
  </div>
    )
  }

   
  
}
  
  



export default App;
