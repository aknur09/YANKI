import React, { useEffect } from 'react' 
import styles from './Categories.module.css' 
import { useDispatch, useSelector } from 'react-redux' 
import { getProducts } from '../../redux/slices/productsSlices'
import { setCategory } from '../../redux/slices/categorySlices'
import { Link } from 'react-router-dom';



 
const Categories = () => { 
    const { productsData }=useSelector((state)=> state.products) 
    const { categoryData }=useSelector((state)=> state.category)
 
    const dispatch=useDispatch() 
    useEffect(()=>{ 
        dispatch(getProducts()) 
      
    }, []) 

  

   
    console.log(productsData); 
    // console.log(categoryData);

    //     const categories=productsData.map((el)=>el.kategory) 
    // console.log(categories); 
    // const newCategories=categories.filter((el)=>el!==)

    //  const list = []

    //     const findCategories=productsData.reduce((total,el)=>{
    //   if(el.kategory && !list.includes(el.kategory)){
    //    list.push(el.kategory)
    //    total[el.kategory] = el
    //   }
    //   return total  
    //  }, {})

    const renderCategoryItems=()=>{
      let list = []
      const mapCat = productsData.reduce((total,el)=>{
          if(el.kategory && !list.includes(el.kategory)){
           list.push(el.kategory)
           total[el.kategory] = el
          }
          return total  
         }, {})
         
     const categoriesNew = Object.values(mapCat)
     console.log(categoriesNew);

     
      dispatch(setCategory(categoriesNew)) 
    

    }

    //  productsData.forEach((product) => {
    //   if (!list.includes(product.kategory)) {
    //     list.push(product.kategory)
    //   }
    //  });
   

  


    // const newCat= []; 
    // const checkCategory=(arr)=>{ 
    //   for (const el of arr) { 
    //     if(el.kategory.includes(newCat)){ 
    //       console.log(el.kategory); 
    //       return 
    //     } else{ 
    //       return newCat.push(el.kategory) 
    //     } 
    //   } 
    // } 
  //   const filterTitle=(title)=>{ 
  //     const filterProducts=props.products.filter(el=>el.kategory===title) 
  //     setCategoryData(filterProducts) 
  // } 
    // checkCategory(productsData) 
    // console.log(newCat); 

    
  

     
    useEffect(()=>{ 
        renderCategoryItems()
      
    }, []) 

console.log(categoryData);

   
  return ( 
    <div> 
      <h2>Категории</h2> 
      <div className={styles.categoryBlocks}>
  {categoryData.slice(0, 4).map((category) => {
    return (
      <div key={category.id}>
        <img style={{ width: 150 }} src={category.images} alt="" />
       
  <p>{category.name}</p>


      </div>
    );
  })}
</div>
 
 
    </div>


    
 
  ) 
} 
 
export default Categories;

