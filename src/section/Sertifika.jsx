import React from 'react';

import ctfing1 from './images/certificates/a1ingilizce.jpg';
import ctfing2 from './images/certificates/a2ingilizce.jpg';
import ctfingb1 from './images/certificates/b1ingilizce.jpg';
import agtem from './images/certificates/agtemelleri.jpg';
import siem from './images/certificates/siem.jpg';
import stres from './images/certificates/stres.jpg';
import ikna from './images/certificates/ikna.jpg';
import dok from './images/certificates/dokumantipleri.jpg';
import siber from './images/certificates/siberguvenlik.jpg';
import problem from './images/certificates/problemcozme.jpg';
import ddos from './images/certificates/ddos.jpg';
import mulakat from './images/certificates/mulakat.jpg';
import musteri from './images/certificates/musteriyitanimak.jpg';
import bilgitek from './images/certificates/bilgiteklonojileri.jpg';
import pazar from './images/certificates/pazar.jpg';
import girisim from './images/certificates/girisimcilik.jpg';








const Sertifika = () => {
  // Örnek veri, istediğiniz kadar öğe ekleyebilirsiniz
  const certificates = [
    { id: 1, title: 'A1 İngilizce', imgSrc: ctfing1 },
    { id: 2, title: 'A2 İngilizce', imgSrc: ctfing2 },
    { id: 3, title: 'B1 İngilizce', imgSrc: ctfingb1 },
    { id: 4, title: 'Ağ Temelleri', imgSrc: agtem },
    { id: 5, title: 'SIEM Temelleri', imgSrc: siem },
    { id: 6, title: 'Stresle Başa Çıkma ve Bilinçli Farkındalık', imgSrc: stres },
    { id: 7, title: 'İkna Becerileri', imgSrc: ikna },
    { id: 8, title: 'Doküman Tipleri ve Veri Formatları', imgSrc: dok },
    { id: 9, title: 'Siber Güvenliğe Giriş', imgSrc: siber },
    { id: 10, title: 'Problem Çözme Teknikleri', imgSrc: problem },
    { id: 11, title: 'DoS / DDos Saldırıları ve Koruma', imgSrc: ddos },
    { id: 12, title: 'Mülakat Teknikleri', imgSrc: mulakat },
    { id: 13, title: 'Müşteriyi Tanımak', imgSrc: musteri },
    { id: 14, title: 'Bilgi Teknolojilerine Giriş', imgSrc: bilgitek },
    { id: 15, title: 'Pazar Araştırması ve Fiyatlandırma Stratejileri', imgSrc: pazar },
    { id: 16, title: 'Girişimcilik Temelleri', imgSrc: girisim }
  ];

  return (
    <div className="container mt-4">
      <div className='position-relative'>
        <div className='position-absolute top-0 end-0'>
          <p style={{color:"rgb(130,130,130)"}}>{certificates.length} Adet Sertifika Mevcut.</p>
        </div>
      </div>
      <div className="row gy-4">
        {certificates.map((certificate) => (
          <div className="col-lg-4 mt-5 text-center" key={certificate.id}>
            <img
              src={certificate.imgSrc}
              alt={certificate.title}
              className="rounded-2 mb-3"
              style={{ width: '80%' }}
            />
            <p style={{color:"rgb(235,235,235)"}}>{certificate.title}</p>
            <button
              type="button"
              className="btn btn-outline-success"
              data-bs-toggle="modal"
              data-bs-target={`#modal-${certificate.id}`}
            >
              Preview
            </button>

            {/* Modal */}
            <div
              className="modal fade"
              id={`modal-${certificate.id}`}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby={`modalLabel-${certificate.id}`}
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5"
                      id={`modalLabel-${certificate.id}`}
                    >
                      {certificate.title}
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img
                      src={certificate.imgSrc}
                      alt={certificate.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sertifika;
