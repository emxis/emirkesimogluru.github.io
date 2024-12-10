import React from 'react'

const Footer = () => {
  return (
    <div className="container mt-4 text-center p-5 pb-4">
        <h4 className='text-light'>Emir Kesimoğlu</h4>
        <div className='row mt-4 w-50 mx-auto footerA' style={{width:"37%"}}>
            <div className="row mx-auto gap-2">
           <div className="col-lg">
           <a className="nav-link footerLink text-light" href="/">
              Ana Sayfa
            </a>
           </div>
           <div className="col-lg">
           <a className="nav-link footerLink text-light" href="/">
              Beni Tanıyın & Portfolyo
            </a>
           </div>
           <div className="col-lg">
           <a className="nav-link footerLink text-light" href="/">
              Youtube Videolarım
            </a>
           </div>
          </div>
        </div>
        <div className='mt-4'>
            <h4 className='h6'>@2023 – 2024 <span><a href='#' className='urlSite'>Emir Kesimoğlu</a></span> Tüm Hakları Sakldır.  </h4>
        </div>
    </div>
  )
}

export default Footer
