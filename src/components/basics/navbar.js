import React from 'react'

function Navbar({filterItems, menuList}) {
  return (
    <>
        <nav className='navbar'>
        <div className='btn-group'>

            {
                menuList.map((curElem) => {
                    return (
                        <button className='btn-group__item' onClick={() =>filterItems(curElem)}>{curElem}</button>
                    )
                })
            }
          {/* <button className='btn-group__item' onClick={() =>filterItems("breakfast")}>Breakfast</button>
          <button className='btn-group__item' onClick={() =>filterItems("lunch")}>Lunch</button>
          <button className='btn-group__item' onClick={() =>filterItems("evening")}>Evening</button>
          <button className='btn-group__item' onClick={() =>filterItems("dinner")}>Dinner</button>
          <button className='btn-group__item' onClick={() =>setMenuData(Menu) }>All</button> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar