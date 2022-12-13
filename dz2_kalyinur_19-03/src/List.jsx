import React from 'react'
import Item from './Item'


function List() {
    const list = [
        {url:'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg',name:"Lisa",age:18,male:'female'},
        {url:'https://burst.shopifycdn.com/photos/model-in-gold-fashion.jpg?width=1200&format=pjpg&exif=1&iptc=1',name:"Valya",age:20,male:'female'},
        {url:'https://thumbs.dreamstime.com/b/silhouette-female-model-studio-silhouette-female-model-studio-side-view-young-woman-wearing-earphones-grey-126801036.jpg',name:"Beka",age:18,male:'other'}
    ]

  return (
    <div>
        
        {list.map((item,i)=>{
            return <Item  key={i} i={item}/>
        })}

    </div>
  )
}

export default List