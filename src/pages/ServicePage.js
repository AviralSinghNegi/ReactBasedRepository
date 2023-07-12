import React from 'react'
import Cards from '../components/Cards'
import Services2 from '../components/Services2'
export default function ServicePage() {
  return (
    <div className='plans mt-3 ' >
    <h3 className='text-center'>Our Services</h3>
    <main>
    {/* <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
            <Cards imageUrl='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' cardTitle='Card Title 1' content='Some quick example text to build on the card title and make up the
            bulk of the card'/>
        </div>
        <div className="col">
            <Cards imageUrl='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' cardTitle='Card Title 2' content='Some quick example text to build on the card title and make up the
            bulk of the card'/>
        </div>
        <div className="col">
            <Cards imageUrl='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' cardTitle='Card Title 3' content='Some quick example text to build on the card title and make up the
            bulk of the card'/>
        </div>
        <div className="col">
            <Cards imageUrl='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' cardTitle='Card Title 4' content='Some quick example text to build on the card title and make up the
            bulk of the card'/>
        </div>
        <div className="col">
            <Cards imageUrl='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' cardTitle='Comming Soon' content='... \n ... &#13; ...'/>
        </div>
        <div className="col">
            <Cards imageUrl='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' cardTitle='Comming Soon' content='... &#13; ... &#13; ...'/>
        </div>
    </div> */}

    <Services2 />
    </main>
    </div>
  )
}
