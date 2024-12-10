import React from 'react';

const Youtube = () => {
  const youtubeVideos = [
    {
      id: 1,
      title: "Video 1",
      url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/-VSiklGNEGk?si=4lMtI24v3afPnJf3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      id: 2,
      title: "Video 2",
      url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Sb-QT75w7tk?si=0Pbq-BpljDTSAomB" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
  ];

  return (
    <div className='container p-5'>
      <div className='row gy-5'>
        {youtubeVideos.map((yt) => (
          <div className='col-lg-6 mt-4 text-center' key={yt.id}>
            <div dangerouslySetInnerHTML={{ __html: yt.url }} className='ratio ratio-16x9'/>
            <p style={{ color: "rgb(235,235,235)" }} className='mt-3'>{yt.title}</p>
          </div>
        ))}
      </div>
      <h2 className='text-white text-center' style={{fontFamily:"monospace"}}>. . .</h2>
    </div>
  );
};

export default Youtube;
